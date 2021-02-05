
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
   
    if (item === 'products') {
      this.router.navigate([{ outlets: { componentes: 'insert-product' } }]);
    }
    if (item === 'ship') {
      this.router.navigate([{ outlets: { componentes: 'managment-product' } }]);
    }
    if (item === 'stock') {
      this.router.navigate([{ outlets: { componentes: 'dashboard-product' } }]);
    }
  
  }


  ngOnInit() {
    let permisos = JSON.parse(localStorage.getItem('permisos'));
    this.array_modulos = permisos.modulos;
    this.router.navigate([{ outlets: { componentes: 'insert-product' } }]);

  }

}
