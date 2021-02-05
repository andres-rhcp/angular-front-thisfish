import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { LoadingService, ServidorService, SnackBarService, ConstantsService, SharingDataService, DialogService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FichaRecursoComponent } from '../ficha-recurso/ficha-recurso.component';
import { DialogComponent } from '../../_components/dialog/dialog.component';

@Component({
  selector: 'app-lista-prestamos',
  templateUrl: './lista-prestamos.component.html',
  styleUrls: ['./lista-prestamos.component.css']
})
export class ListaPrestamosComponent implements OnInit {
  displayedColumns: string[] = ['pre_id', 'rec_mfn', 'rec_titulo', 'rec_autor_personal', 'pre_cedula', 'pre_nombres',
    'pre_fecha_prestamo', 'pre_fecha_entrega', 'pre_campo_1', 'pre_campo_2', 'pre_institucion', 'pre_estado', 'ver'];
  dataServidores: ServidorElement[] = [];
  dataSource = new MatTableDataSource<ServidorElement>(this.dataServidores);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  length: number = 0;
  pageSize: number = this.constantsService.pageSizeDefault;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<ServidorElement>(true, []);
  constructor(private loadingService: LoadingService,
    private dialog: MatDialog,
    private servidorService: ServidorService,
    private snackBarService: SnackBarService,
    public constantsService: ConstantsService,
    private sharingDataService: SharingDataService,
  ) { }

  ngOnInit() {
    this.cargarListaPrestamos();
  }

  cargarListaPrestamos(evt?: any) {
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
    this.servidorService.getAllPrestamosByEstado('')
      .pipe(first())
      .subscribe(
        respuesta => {
          this.dataSource = new MatTableDataSource(respuesta);
          this.dataSource.paginator = this.paginator;
          console.log(respuesta);
          this.loadingService.hide();
        },
        error => {
          this.snackBarService.openSnackBar('Error al obtener información de préstamos.', 'error', 'Error');
          this.loadingService.hide();
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

  registrarPrestamo(element): void {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { title: 'Confirmación', message: '¿Desea ingresar libro?' },
      panelClass: 'my-class'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'OK') {
        this.loadingService.show();
        this.servidorService.updatePrestamo(element.pre_id, 'ENTREGADO', '', element.pre_observaciones)
          .pipe(first())
          .subscribe(
            respuesta => {
              if (respuesta.mensaje == 'OK') {
                this.loadingService.hide();
                this.snackBarService.openSnackBar('!Libro ingresado correctamente!', 'info', 'Info'); 
                this.cargarListaPrestamos();         
              }
              else {
                this.snackBarService.openSnackBar('!Ocurrió un error al ingresar libro!', 'error', 'Error');
              }
              this.loadingService.hide();
            });
      } 
    });
  }
}



export interface ServidorElement {
  id: number;
  tablaDestino: string;
  descripcion: string;
  rutaServicio: string;
  usuarioCreacion: string;
  fechaCreacion: string
}