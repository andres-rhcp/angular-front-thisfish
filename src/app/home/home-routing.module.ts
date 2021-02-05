import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresarRecursosComponent } from '../biblioteca/ingresar-recursos/ingresar-recursos.component';
import { ListaRecursosComponent } from '../biblioteca/lista-recursos/lista-recursos.component';
import { IngresarPrestamosComponent } from '../biblioteca/ingresar-prestamos/ingresar-prestamos.component';
import { ListaPrestamosComponent } from '../biblioteca/lista-prestamos/lista-prestamos.component';
import { InsertProductComponent } from '../managment/insert-product/insert-product.component';
import { ManagmentProductComponent } from '../managment/managment-product/managment-product.component';
import { DashboardProductComponent } from '../managment/dashboard-product/dashboard-product.component';
const routes: Routes = [
  { path: 'ingreso-recursos', component: IngresarRecursosComponent, outlet: 'componentes' },
  { path: 'lista-recursos', component: ListaRecursosComponent, outlet: 'componentes' },
  { path: 'ingreso-prestamos', component: IngresarPrestamosComponent, outlet: 'componentes' },
  { path: 'lista-prestamos', component: ListaPrestamosComponent, outlet: 'componentes' },
  { path: 'insert-product', component: InsertProductComponent, outlet: 'componentes' },
  { path: 'managment-product', component: ManagmentProductComponent, outlet: 'componentes' },
  { path: 'dashboard-product', component: DashboardProductComponent, outlet: 'componentes' },
];

@NgModule({
 


  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class HomeRoutingModule { }
