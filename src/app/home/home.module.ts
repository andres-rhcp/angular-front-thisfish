import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule, MatListModule, MatExpansionModule, MatDialogModule } from '@angular/material';
import { DialogComponent } from '../_components/dialog/dialog.component';
import { DialogNewComponent } from '../_components/dialog-new/dialog-new.component';
import { DialogEditComponent } from '../_components/dialog-edit/dialog-edit.component';
import { MatPaginatorModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

import { InsertProductComponent} from '../managment/insert-product/insert-product.component';
import { ManagmentProductComponent } from '../managment/managment-product/managment-product.component';
import { DashboardProductComponent } from '../managment/dashboard-product/dashboard-product.component';
import { ReceiveComponent } from '../managment/receive/receive.component';
import { ShipmentComponent } from '../managment/shipment/shipment.component';



@NgModule({
  declarations: [DashboardComponent, DialogComponent, DialogNewComponent, DialogEditComponent, InsertProductComponent, ManagmentProductComponent, DashboardProductComponent, ReceiveComponent, ShipmentComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule, MatListModule,
    MatExpansionModule,
    HomeRoutingModule,
    MatDialogModule,
    MatPaginatorModule, 
    MatChipsModule,
    MatTooltipModule,
    FormsModule,
  ],
  entryComponents: [
    DialogComponent,
    DialogNewComponent,
    DialogEditComponent,
    InsertProductComponent,
    ManagmentProductComponent,
    DashboardProductComponent,
    ReceiveComponent,
    ShipmentComponent
  ]
}) 

export class HomeModule { }
