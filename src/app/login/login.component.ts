import { Component } from '@angular/core';
import { Usuarios } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
     usuarios:Usuarios = new Usuarios();

     constructor(){}

     ngOnInit(): void{

     }

     userLogin(){
        console.log(this.usuarios)
     }
}
