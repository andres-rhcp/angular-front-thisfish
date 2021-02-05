import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntranetComponent } from '../inicio/intranet/intranet.component';

const routes: Routes = [
  { path: 'intranet-web', component:IntranetComponent }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
