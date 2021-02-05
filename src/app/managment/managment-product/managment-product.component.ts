import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { LoadingService, ServidorService, SnackBarService, ConstantsService, SharingDataService, DialogService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReceiveComponent } from '../../managment/receive/receive.component';
import { ShipmentComponent } from '../../managment/shipment/shipment.component';

@Component({
  selector: 'app-managment-product',
  templateUrl: './managment-product.component.html',
  styleUrls: ['./managment-product.component.css']
})
export class ManagmentProductComponent implements OnInit {
  displayedColumns: string[] = ['product_sku', 'product_name', 'product_type',
  'stock', 'date_update', 'user_update','observation', 'ver', 'ficha'];
dataServidores: ServidorElement[] = [];
dataSource = new MatTableDataSource<ServidorElement>(this.dataServidores);
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
length: number = 0;
pageSize: number = this.constantsService.pageSizeDefault;
// dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
selection = new SelectionModel<ServidorElement>(true, []);

constructor(
  private loadingService: LoadingService,
  private dialog: MatDialog,
  private servidorService: ServidorService,
  private snackBarService: SnackBarService,
  public constantsService: ConstantsService,
  private sharingDataService: SharingDataService,

) { }

ngOnInit() {
  this.cargarListaRecursos();
}

cargarListaRecursos(evt?: any) {
  let offset = 0;
  let limit = 0;
  if (evt) {
    let pageSize = evt.pageSize;
    let pageIndex = evt.pageIndex;
    offset = pageSize * pageIndex;
    limit = pageSize;
    this.constantsService.pageSizeDefault = pageSize;
  }
  else {
    limit = this.constantsService.pageSizeDefault;
    offset = 0;
  }
  this.loadingService.show();
  this.servidorService.getAllProducts()
    .pipe(first())
    .subscribe(
      respuesta => {
        this.dataSource = new MatTableDataSource(respuesta);
        this.dataSource.paginator = this.paginator;
        console.log(respuesta);
        this.loadingService.hide();
      },
      error => {
        this.snackBarService.openSnackBar('Error to get products information.', 'error', 'Error');
        this.loadingService.hide();
      });
}

openInformacionDialog(element): void {
  const dialogRef = this.dialog.open(ReceiveComponent, {
    width: '540px',
    data: {  data: element.data, product_sku: element.product_sku, product_name: element.product_name,
            product_type: element.product_type, stock: element.stock, user_update:element.user_update,
            date_update:element.date_update,observation:element.observation},
    panelClass: 'my-class'
  });
  dialogRef.afterClosed().subscribe(result => {
    this.cargarListaRecursos();
  });
}

openFichaDialog(element): void {
  const dialogRef = this.dialog.open(ShipmentComponent, {
    width: '540px',
    height: '450px',
    data: {  data: element.data, product_sku: element.product_sku, product_name: element.product_name,
      product_type: element.product_type, stock: element.stock, user_update:element.user_update,
      date_update:element.date_update,observation:element.observation},
    panelClass: 'my-class'
  });
  dialogRef.afterClosed().subscribe(result => {
    this.cargarListaRecursos();
  });
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}

export interface ServidorElement {
  id: number;
  tablaDestino: string;
  descripcion: string;
  rutaServicio: string;
  usuarioCreacion: string;
  fechaCreacion: string
}
