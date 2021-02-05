import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable(); 
  
  //utilizo para compartir info entre componentes
  data = null;
  dataVentas =null;
  facturaVentas=null;
  numero_factura=null;
  ipOficina=null;

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }  

  dataArray(message: any) {
    this.messageSource.next(message)
  }  

}
