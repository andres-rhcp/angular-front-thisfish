import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../_components/snack-bar/snack-bar.component';
 
@Injectable({
 providedIn: 'root'
})
export class SnackBarService {
 
 constructor(
 private snackBar: MatSnackBar
 ) { }
 
 public openSnackBar(message: string, action: string, snackType?: string) {
 
 //const _snackType = snackType !== undefined ? snackType : 'Success';
 
 const _snackType: string = snackType !== undefined ? snackType : 'Success';
 
 this.snackBar.openFromComponent(SnackBarComponent, {
 duration: 5000,//comentar esta línea para no cerrar
 //horizontalPosition: 'end',
 verticalPosition: 'top',
 
 data: { message: message, action: action, snackType: _snackType }
 });
 }
 
}