import { Component, OnInit, Inject } from '@angular/core';
import { LoadingService, ServidorService,   SharingDataService, DialogService } from '../../_services';
import { first } from 'rxjs/operators';
import {   MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
  nombre: string;
  tramite: string;
  id: string;
}
@Component({
  selector: 'app-informacion-recurso',
  templateUrl: './informacion-recurso.component.html',
  styleUrls: ['./informacion-recurso.component.css']
})
export class InformacionRecursoComponent implements OnInit {
  rec_mfn: string;
  rec_planilla: string;
  rec_nombre_archivo: string;
  rec_ubicacion_fisica: string;
  rec_nivel_bibliografico: string;
  rec_nivel_registro: string;
  rec_autor_personal: string;
  rec_titulo: string;
  rec_paginas: string;
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
  constructor(
    private servidorService: ServidorService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    var data = this.servidorService.getRecursoById(this.data.id).pipe(first()).subscribe(data => {
      var recurso = JSON.stringify(data, null, "    ");
      data.forEach(recurso => {
        this.rec_mfn = recurso.rec_mfn;
        this.rec_planilla = recurso.rec_planilla;
        this.rec_nombre_archivo = recurso.rec_nombre_archivo;
        this.rec_ubicacion_fisica = recurso.rec_ubicacion_fisica;
        this.rec_nivel_bibliografico = recurso.rec_nivel_bibliografico;
        this.rec_nivel_registro = recurso.rec_nivel_registro;
        this.rec_autor_personal = recurso.rec_autor_personal;
        this.rec_titulo = recurso.rec_titulo;
        this.rec_paginas = recurso.rec_paginas;
        this.rec_editorial = recurso.rec_editorial;
        this.rec_ciudad_editorial = recurso.rec_ciudad_editorial;
        this.rec_pais_editorial = recurso.rec_pais_editorial;
        this.rec_edicion = recurso.rec_edicion;
        this.rec_informacion_descriptiva = recurso.rec_informacion_descriptiva;
        this.rec_fecha_publicacion = recurso.rec_fecha_publicacion;
        this.rec_fecha_iso = recurso.rec_fecha_iso;
        this.rec_isbn = recurso.rec_isbn;
        this.rec_impresion_documento = recurso.rec_impresion_documento;
        this.rec_idioma = recurso.rec_idioma;
        this.rec_resumen = recurso.rec_resumen;
        this.rec_numero_referencias = recurso.rec_numero_referencias;
        this.rec_descriptores = recurso.rec_descriptores;
        this.rec_documentalista = recurso.rec_documentalista;
        this.rec_estado_obra = recurso.rec_estado_obra;
        this.rec_numero_ejemplares = recurso.rec_numero_ejemplares;
        this.rec_precio_unitario = recurso.rec_precio_unitario;
        this.rec_via_adquisicion = recurso.rec_via_adquisicion;
        this.rec_fecha_registro = recurso.rec_fecha_registro;
        this.rec_fecha_modificacion = recurso.rec_fecha_modificacion;
        this.rec_observaciones = recurso.rec_observaciones;
        this.rec_estado = recurso.rec_estado;
        this.rec_campo_1 = recurso.rec_campo_1;
        this.rec_campo_2 = recurso.rec_campo_2;
      }, error => {
        console.log(error);
      });

    });
  }

}
