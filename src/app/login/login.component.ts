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
  if(modeloUsu.correo!="" && modeloUsu.usu_contra!=""){
    this.loginUs.getUsuarioUserPass(this.modeloUsuario).subscribe(data=>{
      if(data!=null){
     
      this.modeloUsuario=data;
      
      //Inicio de sesion exitoso
      Swal.fire(`Inicio de sesion exitoso`,'success')
      this.router.navigate(['/inicio']);
        console.log("Bienvenido");
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


