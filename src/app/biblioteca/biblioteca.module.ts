import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { IngresarRecursosComponent } from './ingresar-recursos/ingresar-recursos.component';
import { ListaRecursosComponent } from './lista-recursos/lista-recursos.component';
import { InformacionRecursoComponent } from './informacion-recurso/informacion-recurso.component';
import { FichaRecursoComponent } from './ficha-recurso/ficha-recurso.component';
import { IngresarPrestamosComponent } from './ingresar-prestamos/ingresar-prestamos.component';
import { ListaPrestamosComponent } from './lista-prestamos/lista-prestamos.component';
import { ListaRecursosBusquedaComponent } from './lista-recursos-busqueda/lista-recursos-busqueda.component';

@NgModule({
  declarations: [IngresarRecursosComponent, ListaRecursosComponent, InformacionRecursoComponent, FichaRecursoComponent, IngresarPrestamosComponent, ListaPrestamosComponent, ListaRecursosBusquedaComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
