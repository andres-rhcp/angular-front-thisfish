import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule,  } from "@angular/material";
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { InformacionRecursoComponent } from '../biblioteca/informacion-recurso/informacion-recurso.component';

@NgModule({
  declarations: [LoginComponent, InformacionRecursoComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule
  ], entryComponents: [
    InformacionRecursoComponent
    
  ]
})
export class LoginModule { }
