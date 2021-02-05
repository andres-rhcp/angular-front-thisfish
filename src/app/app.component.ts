import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthenticationService,} from './_services/authentication.service'
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from './_components/dialog/dialog.component';
import { LoadingService, ServidorService, SnackBarService, ConstantsService, SharingDataService, DialogService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sincronizador';
  currentUser: any;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;
  private _mobileQueryListener2: () => void;
  nombre_usuario: string;
  aplicacion: string;
  constructor(
    private router: Router,
    private authenticationService:AuthenticationService,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,  
    public dialog: MatDialog,
    private loadingService: LoadingService
  )
  {
    this.currentUser=this.authenticationService.currentUserValue;
    this.nombre_usuario = this.authenticationService.usuario;
    this.aplicacion = this.authenticationService.aplicacion;
    this.authenticationService.currentUser.subscribe(x=>this.currentUser=x); 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.nombre_usuario = localStorage.getItem('usuario');
    this.aplicacion = localStorage.getItem('aplicacion');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authenticationService.logout();
    console.log("Se ha cerrado sesion");
    // this.router.navigate(['login']);
    this.router.navigate([{outlets: 'login'}]);
    location.reload();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '305px',
      data: { message: '¿Are you sure to log out?' },
      panelClass: 'my-class'
    }); 
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'OK') {
        this.loadingService.show();
        this.logout();
        this.loadingService.hide();
      }
    });    
  }
update(){
  this.nombre_usuario = localStorage.getItem('usuario');
  this.aplicacion = localStorage.getItem('aplicacion');
}
}
