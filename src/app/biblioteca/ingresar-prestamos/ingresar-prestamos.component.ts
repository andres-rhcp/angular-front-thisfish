import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { LoadingService, ServidorService, SnackBarService, ConstantsService, SharingDataService, DialogService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformacionRecursoComponent } from '../informacion-recurso/informacion-recurso.component';
import { FichaRecursoComponent } from '../ficha-recurso/ficha-recurso.component';
import { ListaRecursosBusquedaComponent } from '../lista-recursos-busqueda/lista-recursos-busqueda.component';
import { DialogComponent } from '../../_components/dialog/dialog.component';
@Component({
  selector: 'app-ingresar-prestamos',
  templateUrl: './ingresar-prestamos.component.html',
  styleUrls: ['./ingresar-prestamos.component.css']


})
export class IngresarPrestamosComponent implements OnInit {
  rec_mfn;
  rec_titulo;
  rec_autor_personal;
  rec_resumen;

  pre_id;
  pre_cedula;
  pre_nombres;
  pre_apellidos;
  pre_institucion;
  pre_nivel;
  pre_fecha_prestamo;
  pre_fecha_entrega;
  pre_observaciones;
  pre_estado;
  pre_campo_1;
  pre_campo_2;
  pre_campo_3;
  pre_campo_4;

  constructor(private loadingService: LoadingService,
    private dialog: MatDialog,
    private servidorService: ServidorService,
    private snackBarService: SnackBarService,
    public constantsService: ConstantsService,
    private sharingDataService: SharingDataService) { }

  ngOnInit() {
  }

  openListaRecursos(): void {
    const dialogRef = this.dialog.open(ListaRecursosBusquedaComponent, {
      width: '800px',
      height: '530px',
      data: { title: 'Ver archivo', message: 'Ver archivo', id: '' },
      panelClass: 'my-class'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.rec_mfn = result.rec_mfn;
      this.rec_titulo = result.rec_titulo
      this.rec_autor_personal = result.rec_autor_personal;
      this.rec_resumen = result.rec_resumen;
    });
  }

  insertPrestamo(element): void {
    if (this.rec_mfn != null && this.rec_mfn != '') {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        data: { title: 'Mensaje', message: '¿Está seguro de registrar el prestamo?' },
        panelClass: 'my-class'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == 'OK') {
          this.loadingService.show();
          this.servidorService.insertPrestamo(this.rec_mfn, this.pre_cedula, this.pre_nombres, this.pre_apellidos,
            this.pre_institucion, this.pre_nivel, this.pre_fecha_prestamo, this.pre_fecha_entrega, this.pre_observaciones, this.pre_estado,
            this.pre_campo_1, this.pre_campo_2, this.pre_campo_3, this.pre_campo_4)
            .pipe(first())
            .subscribe(
              respuesta => {
                if (respuesta.mensaje == 'OK') {
                  this.loadingService.hide();
                  this.snackBarService.openSnackBar('!Préstamo registrado correctamente!', 'info', 'Info');
                  this.rec_mfn = ""; this.pre_cedula = ""; this.pre_nombres = ""; this.pre_apellidos = "";
                  this.pre_institucion = ""; this.pre_nivel = ""; this.pre_fecha_prestamo = ""; this.pre_fecha_entrega = ""; this.pre_observaciones = ""; this.pre_estado = "";
                  this.pre_campo_1 = ""; this.pre_campo_2 = ""; this.pre_campo_3 = ""; this.pre_campo_4 = "";
                }
                else {
                  this.snackBarService.openSnackBar('!Ocurrió un error al registrar préstamo!', 'error', 'Error');
                }
                this.loadingService.hide();
              });
        }
      });
    } else {
      this.snackBarService.openSnackBar('¡Por favor seleccionar libro!', 'error', 'Warning');
    }
  }
}
