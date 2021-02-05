import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertProductComponent } from '../managment/insert-product/insert-product.component';
import { ManagmentProductComponent } from '../managment/managment-product/managment-product.component';
import { DashboardProductComponent } from '../managment/dashboard-product/dashboard-product.component';
const routes: Routes = [
  { path: 'insert-product', component: InsertProductComponent, outlet: 'componentes' },
  { path: 'managment-product', component: ManagmentProductComponent, outlet: 'componentes' },
  { path: 'dashboard-product', component: DashboardProductComponent, outlet: 'componentes' },
];

@NgModule({
 


  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class HomeRoutingModule { }
