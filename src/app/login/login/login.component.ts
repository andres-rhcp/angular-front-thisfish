import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthenticationService } from '../../_services/authentication.service';
import { first } from 'rxjs/operators';
import { LoadingService } from '../../_services/loading.service';
import { SnackBarService } from '../../_services/snack-bar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  });
  returnUrl: string;
  constructor(
    private authenticationService: AuthenticationService,
    private loading: LoadingService,
    private snackbarService: SnackBarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  login() {
    console.log(this.loginForm)
    if (this.loginForm.invalid) { return }
    this.loading.show();
    this.authenticationService.login(this.loginForm.controls.usuario.value, this.loginForm.controls.password.value).pipe(first()).subscribe(
      respuesta => {
        this.loading.hide();
        this.router.navigate([this.returnUrl])
      },
      error => {
        this.loading.hide();
        console.log(error)
        this.snackbarService.openSnackBar('Error al consumir servicio.', "error", "Error");
      }
    )
  }

}
