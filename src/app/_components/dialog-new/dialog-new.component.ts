import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService, ServidorService, SnackBarService, SharingDataService } from '../../_services';
import { first } from 'rxjs/operators';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: './dialog-new-component',
  styleUrls: ['./dialog-new.component.css'],
  templateUrl: './dialog-new.component.html',
})
export class DialogNewComponent {
  // _minLength:number = 10;
  // serIp_maxLength:number = 20;

  // serUsuarioDb_minLength:number = 2;
  // serUsuarioDb_maxLength:number = 50;

  // serPasswordDb_minLength:number = 2;
  // serPasswordDb_maxLength:number = 50;

  servidorForm = new FormGroup({
    tablaOrigen: new FormControl('', [Validators.required]),
    tablaDestino: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    rutaServicio: new FormControl(true, [Validators.required]),
     
  });

  constructor(
    public dialogRef: MatDialogRef<DialogNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private servidorService: ServidorService,
    private snackBarService: SnackBarService,
    private sharingDataService: SharingDataService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearTabla()
  {
    // if (this.servidorForm.invalid) {
    //   return;      
    // }
    // else{
        let data = this.servidorForm.value;
        // data.esNuevo = true;
        //por control disable, cuando se actualiza se envía la PK
        // if(data.serIp === undefined )
        // {
          // data.esNuevo = false;
          data.estado = "ACTIVO";
        // }
        // this.loadingService.show();
        console.log(data);
        this.servidorService.crearTabla(data).pipe (first()).subscribe(
            respuesta => {
              console.log(respuesta)
              let array_result = respuesta;
              // if( array_result.length === 2 )
              // {                
              //   let obj = array_result[0];
              //   let creado = array_result[1];
              //   if( creado )
              //   {
                  this.snackBarService.openSnackBar('Tabla creada correctamente.','info', 'Success');
                  // this.router.navigate([{outlets: {componentes:'lista-servidores'}}]);
              //   }                
              //   else
              //   this.snackBarService.openSnackBar('Este servidor ya se encuentra registrado.','cerrar', 'Error');
              // }
             
              // else
              // this.snackBarService.openSnackBar('No se pudo mostrar la respuesta.','error', 'Error');
                
              this.loadingService.hide();
            },
            error => {  console.log(error)         
                this.snackBarService.openSnackBar('Error al crear tabla.','error', 'Error');
                this.loadingService.hide();
            });
    } 
    

  }


