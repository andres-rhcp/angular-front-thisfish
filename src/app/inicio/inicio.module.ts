import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { IntranetComponent } from '../inicio/intranet/intranet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from "@angular/material";
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IntranetComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class InicioModule { }
