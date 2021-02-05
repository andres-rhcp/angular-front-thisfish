import { NgModule } from '@angular/core';
 
import {
 MatCardModule,
 MatInputModule,
 MatButtonModule,
 MatIconModule,
 MatProgressSpinnerModule,
 MatSnackBarModule,
 MatToolbarModule,
 MatCheckboxModule,
 MatFormFieldModule,
 MatMenuModule,
 MatTableModule,
 MatGridListModule,
 MatSlideToggleModule,
 MatPaginatorModule,
 MatOptionModule,
 MatSelectModule,
 MatAutocompleteModule,
MatDatepickerModule,
MatNativeDateModule, 
} from '@angular/material';
 
const modules = [
 MatCardModule,
 MatInputModule,
 MatButtonModule,
 MatIconModule,
 MatProgressSpinnerModule,
 MatSnackBarModule,
 MatToolbarModule,
 MatCheckboxModule,
 MatFormFieldModule,
 MatMenuModule,
 MatTableModule,
 MatGridListModule,
 MatSlideToggleModule,
 MatPaginatorModule,
 MatOptionModule,
 MatSelectModule,
 MatAutocompleteModule,
 MatDatepickerModule,
 MatNativeDateModule
];
 
@NgModule({
 imports: modules,
 exports: modules,
})
export class SharedModule { }