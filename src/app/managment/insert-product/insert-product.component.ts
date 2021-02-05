import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../../_components/dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { LoadingService, ServidorService, SnackBarService } from '../../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {


  constructor(
    private dialog: MatDialog,
    private loadingService: LoadingService,
    private servidorService: ServidorService,
    private snackBarService: SnackBarService) { }
  product_sku: string;
  product_name: string;
  product_type: string;
  stock: number;
  date_update: string;
  user_update: string;
  observation: string;

  ngOnInit() {
  }

  insertRecurso(element): void {
    if (this.product_sku != null && this.product_sku != '') {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px',
        data: { title: 'Mensaje', message: '¿Are you sure?' },
        panelClass: 'my-class'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == 'OK') {
          this.loadingService.show();
          this.servidorService.insertRecurso(this.product_sku, this.product_name, this.product_type, this.stock, this.date_update, this.user_update, this.observation)
            .pipe(first())
            .subscribe(
              respuesta => {
                // if (respuesta.mensaje == 'OK') {
                  this.loadingService.hide();
                  this.snackBarService.openSnackBar('!The product was insert!', 'info', 'Info');
                  this.product_sku = "";
                  this.product_name = "";
                  this.product_type = "";
                  this.stock = 0
                  this.date_update = "";
                  this.user_update = "";
                  this.observation = "";

                // }
                // else {
                //   this.snackBarService.openSnackBar('!Something was wrong!', 'error', 'Error');
                // }
                this.loadingService.hide();
              });
        }
      });
    } else {
      this.snackBarService.openSnackBar('¡Empity fields in form!', 'error', 'Warning');
    }
  }

}
