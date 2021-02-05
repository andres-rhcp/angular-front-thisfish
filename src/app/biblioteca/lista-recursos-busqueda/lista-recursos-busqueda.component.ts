import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { LoadingService, ServidorService, SnackBarService, ConstantsService, SharingDataService, DialogService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformacionRecursoComponent } from '../informacion-recurso/informacion-recurso.component';
import { FichaRecursoComponent } from '../ficha-recurso/ficha-recurso.component';

@Component({
  selector: 'app-lista-recursos-busqueda',
  templateUrl: './lista-recursos-busqueda.component.html',
  styleUrls: ['./lista-recursos-busqueda.component.css']
})
export class ListaRecursosBusquedaComponent implements OnInit {
  displayedColumns: string[] = ['rec_mfn', 'rec_titulo', 'rec_autor_personal',
    'rec_pais_editorial', 'rec_resumen', 'rec_estado', 'ver', 'ficha'];
  dataServidores: ServidorElement[] = [];
  dataSource = new MatTableDataSource<ServidorElement>(this.dataServidores);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  length: number = 0;
  pageSize: number = this.constantsService.pageSizeDefault;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<ServidorElement>(false, null);
  selectedRow;
  preventSingleClick = false;
  timer: any;
  delay: Number;
  libro;
  constructor(private loadingService: LoadingService,
    private dialog: MatDialog,
    private servidorService: ServidorService,
    private snackBarService: SnackBarService,
    public constantsService: ConstantsService,
    private sharingDataService: SharingDataService,) { }

  ngOnInit() {
    this.cargarListaRecursos();
  }

  cargarListaRecursos(evt?: any) {
    let offset = 0;
    let limit = 0;
    if (evt) {
      let pageSize = evt.pageSize;
      let pageIndex = evt.pageIndex;
      offset = pageSize * pageIndex;
      limit = pageSize;
      this.constantsService.pageSizeDefault = pageSize;
    }
    else {
      limit = this.constantsService.pageSizeDefault;
      offset = 0;
    }
    this.loadingService.show();
    this.servidorService.getAllRecursosByEstado('ACTIVO')
      .pipe(first())
      .subscribe(
        respuesta => {
          this.dataSource = new MatTableDataSource(respuesta);
          this.dataSource.paginator = this.paginator;
          console.log(respuesta);
          this.loadingService.hide();
        },
        error => {
          this.snackBarService.openSnackBar('Error al obtener información de recursos.', 'error', 'Error');
          this.loadingService.hide();
        });
  }

  openInformacionDialog(element): void {
    const dialogRef = this.dialog.open(InformacionRecursoComponent, {
      width: '740px',
      data: { title: 'Ver archivo', message: 'Ver archivo', id: element.rec_mfn, titulo: element.rec_titulo, autor: element.rec_autor_personal },
      panelClass: 'my-class'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openFichaDialog(element): void {
    const dialogRef = this.dialog.open(FichaRecursoComponent, {
      width: '740px',
      height: '450px',
      data: { title: 'Ver archivo', message: 'Ver archivo', id: element.rec_mfn, titulo: element.rec_titulo, autor: element.rec_autor_personal },
      panelClass: 'my-class'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ;

  singleClick(event) {
    console.log(event.rec_mfn)
    this.libro = event;
  }

  doubleClick(event) {
    this.preventSingleClick = true;
    clearTimeout(this.timer);
    //Navigate on double click
  }


}
export interface ServidorElement {
  rec_mfn: number;
  tablaDestino: string;
  descripcion: string;
  rutaServicio: string;
  usuarioCreacion: string;
  fechaCreacion: string;
  highlighted?: boolean;
  hovered?: boolean;
}