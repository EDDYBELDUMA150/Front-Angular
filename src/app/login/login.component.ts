import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AutenticacionService } from 'src/app/shared/autenticacion.service';
import { Usuarios } from 'src/app/usuarios/Usuarios';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  public myForm!:FormGroup;

  modeloUsuario:Usuarios=new Usuarios();
  constructor(private fb: FormBuilder, private router: Router, private loginUs: AutenticacionService) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();

  }
  
  private createMyForm():FormGroup{ 
    return this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(4)]]
    });  
  }
  public onSubmitForm():void{
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    }
}

login(modeloUsu:Usuarios){
  if(modeloUsu.usu_correo!="" && modeloUsu.usu_contra!=""){
    this.loginUs.getUsuarioUserPass(this.modeloUsuario).subscribe(data=>{
      if (data !== null) {
        // Assuming the data object contains the 'roles' field in the appropriate format
        if (data.roles.id_rol === 1) {
          // Admin login successful
          Swal.fire(`Inicio de sesión exitoso como administrador`, 'success');
          this.router.navigate(['/perfil-admin']); // Replace 'admin-dashboard' with the admin's dashboard route
        } else if (data.roles.id_rol === 2) {
          // Player login successful
          Swal.fire(`Inicio de sesión exitoso como jugador`, 'success');
          this.router.navigate(['/ventanaj/scroll']); // Replace 'player-dashboard' with the player's dashboard route
        }
      }else{
      Swal.fire('Inicio de Sesión Fallido', `Usuario o contraseña incorrectos`, 'error')
        }
      }
    );
    
}else{
  Swal.fire('Inicio de Sesión Fallido','Ingrese los datos','warning');
}
} 
  public get f():any {
     return this.myForm.controls; 
    }  
  } 


  

  