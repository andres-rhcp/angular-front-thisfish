
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';
import { Input } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  array_modulos = [];
  xpandStatus = true;
  constructor(
    // private socket: Socket,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

  }

  listaRelaciones(item) {
    console.log(item)
    //this.router.navigate(['/home/relaciones']);
    //this.router.navigate([{outlets: {primary: 'relaciones' ,componentes:'relaciones'}}]);
    // if (item.nombre === 'consultaServicioAgua') {
    //   this.router.navigate([{ outlets: { componentes: 'lista-tablas' } }]);
    // }
    // if (item.nombre === 'pagoAguaPotable') {
    //   this.router.navigate([{ outlets: { componentes: 'lista-logs' } }]);
    // }
    // if (item.nombre === 'pagoImpuestoPredial') {
    //   this.router.navigate([{ outlets: { componentes: 'admin-tablas' } }]);
    // }
    // if (item.nombre === 'registroPagoTransferencias') {
    //   this.router.navigate([{ outlets: { componentes: 'lista-logs' } }]);
    // }
    if (item === 'products') {
      this.router.navigate([{ outlets: { componentes: 'insert-product' } }]);
    }
    if (item === 'ship') {
      this.router.navigate([{ outlets: { componentes: 'managment-product' } }]);
    }
    // if (item.nombre === 'listaRecursos') {
    //   this.router.navigate([{ outlets: { componentes: 'lista-recursos' } }]);
    // }
    // if (item.nombre === 'listaPrestamos') {
    //   this.router.navigate([{ outlets: { componentes: 'lista-prestamos' } }]);
    // }
  }



  ngOnInit() {
    let permisos = JSON.parse(localStorage.getItem('permisos'));
    this.array_modulos = permisos.modulos;
    this.router.navigate([{ outlets: { componentes: 'lista-tablas' } }]);
    console.log(this.array_modulos)

  }

}
