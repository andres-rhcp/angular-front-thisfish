import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';
 
@Component({
 selector: 'app-snack-bar',
 templateUrl: './snack-bar.component.html',
 styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
 
 constructor(public snackBarRef: MatSnackBarRef<SnackBarComponent>,
 @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
 
 ngOnInit() {
 }
 
 get getIcon() {
 switch (this.data.snackType) {
 case 'Success':
 return 'done_outline';
 case 'Error':
 return 'error';
 case 'Warn':
 return 'warning';
 case 'Info':
 return 'info';
 }
 }
 
}