import { Component, OnInit, Inject } from '@angular/core';
import { LoadingService, ServidorService,   SharingDataService, DialogService } from '../../_services';
import { first } from 'rxjs/operators';
import {   MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SnackBarService, ConstantsService } from '../../_services';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../_components/dialog/dialog.component';

export interface DialogData {
  product_sku: string;
  product_name: string;
  product_type: string;
  stock: number;
  date_update: string;
  user_update: string;
  observation: string;
}
@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  product_sku: string;
  product_name: string;
  product_type: string;
  stock: number;
  date_update: string;
  user_update: string;
  observation: string;
  cantReceive: number;

  constructor(
    private loadingService: LoadingService,
    private dialog: MatDialog,
    private snackBarService: SnackBarService,
    public constantsService: ConstantsService,
    private servidorService: ServidorService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.product_sku=this.data.product_sku;
    this.product_name = this.data.product_name;
    this.product_type = this.data.product_type;
    this.stock = this.data.stock;
    this.date_update = this.data.date_update;
    this.user_update = this.data.user_update;
    this.observation = this.data.observation;
    this.cantReceive = 0;

  }

  //Method that quit quantitie to product
  shipQuantitie(element): void {
    if (this.cantReceive >0 && this.cantReceive != null) {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        data: {  message: '¿Are you sure?' },
        panelClass: 'my-class'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == 'OK') {
          this.loadingService.show();
          if(Number(this.cantReceive)<=Number(this.stock))
          {
          let num = Number(this.stock)-Number(this.cantReceive);
          this.servidorService.updateProductQuantities( this.product_sku, this.product_name,
            this.product_type, num, this.date_update, this.user_update, 
            this.observation)
            .pipe(first())
            .subscribe(
              respuesta => {
                
                  this.loadingService.hide();
                  this.snackBarService.openSnackBar('!Quantitie shipped!', 'info', 'Info');
                  this.cantReceive=0;
                
                this.loadingService.hide();
                this.dialog.closeAll();
              });
            }
          } else {
            this.snackBarService.openSnackBar('¡Not enougth stock !', 'error', 'Warning');
          }
      });
    } else {
      this.snackBarService.openSnackBar('¡Add quantitie > 0!', 'error', 'Warning');
    }
  }

}
