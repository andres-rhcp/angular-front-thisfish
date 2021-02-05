import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../../_components/dialog/dialog.component';
import { MatDialog } from '@angular/material';
import {  LoadingService, ServidorService, SnackBarService } from '../../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-ingresar-recursos',
  templateUrl: './ingresar-recursos.component.html',
  styleUrls: ['./ingresar-recursos.component.css']
})
export class IngresarRecursosComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private loadingService: LoadingService,
    private servidorService: ServidorService,
    private snackBarService: SnackBarService) { }
  rec_planilla: string;
  rec_nnombre_archivo: string;
  rec_ubicacion_fisica: string;
  rec_nivel_bibliografico: string;
  rec_nivel_registro: string;
  rec_autor_personal: string;
  rec_titulo: string; rec_paginas: string;
  rec_editorial: string;
  rec_ciudad_editorial: string;
  rec_pais_editorial: string;
  rec_edicion: string;
  rec_informacion_descriptiva: string;
  rec_fecha_publicacion: string;
  rec_fecha_iso: string;
  rec_isbn: string;
  rec_impresion_documento: string;
  rec_idioma: string;
  rec_resumen: string;
  rec_numero_referencias: string;
  rec_descriptores: string;
  rec_documentalista: string;
  rec_estado_obra: string;
  rec_numero_ejemplares: string;
  rec_precio_unitario: string;
  rec_via_adquisicion: string;
  rec_fecha_registro: string;
  rec_fecha_modificacion: string;
  rec_observaciones: string;
  rec_estado: string;
  rec_campo_1: string;
  rec_campo_2: string;
  ngOnInit() {
  }

  insertRecurso(element): void {
    if (this.rec_planilla != null && this.rec_planilla != '') {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        data: { title: 'Mensaje', message: '¿Está seguro de ingresar el recurso?' },
        panelClass: 'my-class'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == 'OK') {
          this.loadingService.show();
          this.servidorService.insertRecurso(this.rec_planilla, this.rec_nnombre_archivo, this.rec_ubicacion_fisica, this.rec_nivel_bibliografico, this.rec_nivel_registro,
            this.rec_autor_personal, this.rec_titulo)
            .pipe(first())
            .subscribe(
              respuesta => {
                // if (respuesta.mensaje == 'OK') {
                //   this.loadingService.hide();
                //   this.snackBarService.openSnackBar('!Recurso ingresado correctamente!', 'info', 'Info');
                //   this.rec_planilla = "";
                //   this.rec_nnombre_archivo = "";
                //   this.rec_ubicacion_fisica = "";
                //   this.rec_nivel_bibliografico = "";
                //   this.rec_nivel_registro = "";
                //   this.rec_autor_personal = "";
                //   this.rec_titulo = "";
                //   this.rec_paginas = "";
                //   this.rec_editorial = "";
                //   this.rec_ciudad_editorial = "";
                //   this.rec_pais_editorial = "";
                //   this.rec_edicion = "";
                //   this.rec_informacion_descriptiva = "";
                //   this.rec_fecha_publicacion = "";
                //   this.rec_fecha_iso = "";
                //   this.rec_isbn = "";
                //   this.rec_impresion_documento = "";
                //   this.rec_idioma = "";
                //   this.rec_resumen = "";
                //   this.rec_numero_referencias = "";
                //   this.rec_descriptores = "";
                //   this.rec_documentalista = "";
                //   this.rec_estado_obra = "";
                //   this.rec_numero_ejemplares = "";
                //   this.rec_precio_unitario = "";
                //   this.rec_via_adquisicion = "";
                //   this.rec_fecha_registro = "";
                //   this.rec_fecha_modificacion = "";
                //   this.rec_observaciones = "";
                //   this.rec_estado = "";
                //   this.rec_campo_1 = "";
                //   this.rec_campo_2 = "";
                // }
                // else {
                //   this.snackBarService.openSnackBar('!Ocurrió un error al ingresar pago!', 'error', 'Error');
                // }
                this.loadingService.hide();
              });
        }
      });
    } else {
      this.snackBarService.openSnackBar('¡Por favor ingresar planilla!', 'error', 'Warning');
    }
  }

}
