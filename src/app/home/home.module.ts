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

import { IngresarRecursosComponent} from '../biblioteca/ingresar-recursos/ingresar-recursos.component';
import { ListaRecursosComponent} from '../biblioteca/lista-recursos/lista-recursos.component';
import { FichaRecursoComponent} from '../biblioteca/ficha-recurso/ficha-recurso.component';
import { IngresarPrestamosComponent} from '../biblioteca/ingresar-prestamos/ingresar-prestamos.component';
import { ListaRecursosBusquedaComponent} from '../biblioteca/lista-recursos-busqueda/lista-recursos-busqueda.component';
import { ListaPrestamosComponent} from '../biblioteca/lista-prestamos/lista-prestamos.component';

import { InsertProductComponent} from '../managment/insert-product/insert-product.component';
import { ManagmentProductComponent } from '../managment/managment-product/managment-product.component';
import { DashboardProductComponent } from '../managment/dashboard-product/dashboard-product.component';



@NgModule({
  declarations: [DashboardComponent, DialogComponent, DialogNewComponent, DialogEditComponent, IngresarRecursosComponent, ListaRecursosComponent, FichaRecursoComponent, IngresarPrestamosComponent, ListaRecursosBusquedaComponent, ListaPrestamosComponent, InsertProductComponent, ManagmentProductComponent, DashboardProductComponent
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
    IngresarRecursosComponent,
    ListaRecursosComponent,
    FichaRecursoComponent,
    IngresarPrestamosComponent,
    ListaRecursosBusquedaComponent,
    ListaPrestamosComponent,
    InsertProductComponent,
    ManagmentProductComponent,
    DashboardProductComponent
  ]
}) 

export class HomeModule { }
