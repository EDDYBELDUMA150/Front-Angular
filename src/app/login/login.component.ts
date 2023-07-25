import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';
import { Usuarios } from '../modelo/Usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm!: FormGroup;
  modeloUsuario: Usuarios = new Usuarios();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private autenticacionService: AutenticacionService
  ) {}

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmitForm(): void {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    }

    this.login();
  }

  login() {
    const correo = this.myForm.get('email')?.value;
    const usu_contra = this.myForm.get('password')?.value;
    if (correo && usu_contra) {
      this.autenticacionService.login(correo, usu_contra).subscribe(
        (data) => {
          if (data !== null) {
            console.log(correo, usu_contra,data.rol);
             const rol = data.rol;//Nota hay que ver bien como llamamos a los id :()
            if (rol.id_rol === 1) {
              Swal.fire(`Inicio de sesión exitoso como administrador`, 'success');
              this.autenticacionService.setUsuarioLogueado(data);
              this.router.navigate(['/perfil-admin/scroll']);
            } else if (rol.id_rol === 2) {
              Swal.fire(`Inicio de sesión exitoso como jugador`, 'success');
              this.autenticacionService.setUsuarioLogueado(data);
              this.router.navigate(['/ventanaj/scroll']);
            }
          } else {
            Swal.fire('Inicio de Sesión Fallido', 'Usuario o contraseña incorrectos', 'error');
          }
        },
        (error) => {
          console.error(error);
          Swal.fire('Inicio de Sesión Fallido', 'Error en el servidor', 'error');
        }
      );
    } else {
      Swal.fire('Inicio de Sesión Fallido', 'Ingrese los datos', 'warning');
    }
  }
  
  public get f():any {
    return this.myForm.controls; 
   }  

}
