import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { LoadingService, ServidorService, SnackBarService, ConstantsService, SharingDataService, DialogService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.css']
})
export class DashboardProductComponent implements OnInit {
  displayedColumns: string[] = ['product_sku', 'product_name', 'product_type',
  'stock', 'date_update', 'user_update','observation'];
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


}

export interface ServidorElement {
  id: number;
  tablaDestino: string;
  descripcion: string;
  rutaServicio: string;
  usuarioCreacion: string;
  fechaCreacion: string
}

