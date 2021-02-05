import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarRecursosComponent } from './ingresar-recursos/ingresar-recursos.component';

const routes: Routes = [
  { path: 'ingreso-recursos', component: IngresarRecursosComponent, outlet: 'componentes' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
