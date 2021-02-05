import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentRoutingModule } from './managment-routing.module';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { ManagmentProductComponent } from './managment-product/managment-product.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';


@NgModule({
  declarations: [InsertProductComponent, ManagmentProductComponent, DashboardProductComponent],
  imports: [
    CommonModule,
    ManagmentRoutingModule
  ]
})
export class ManagmentModule { }
