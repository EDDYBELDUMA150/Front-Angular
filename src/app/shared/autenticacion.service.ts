import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuarios } from '../usuarios/Usuarios';

import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
   
  private URLlistarUsu: string = 'http://localhost:8080/api';
  private URLLogin: string='http://localhost:8080/api/usuarios/login2';
  constructor(private http: HttpClient, private router: Router) { }

  obtenerUsuarioRol(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URLlistarUsu);
  }
 getUsuarioUserPass(usua:Usuarios){
    return this.http.get<Usuarios>(this.URLlistarUsu+"/usuarios/login/"+usua.correo+"/"+usua.usu_contra);
  }
  //PROBAR CON UN NUEVO METODO LOGIN :(
    /*logar(loginRequest: Usuarios): Observable<any> {
      return this.http.post<any>(this.URLLogin, loginRequest);
    }*/

    login(correo: string, usu_contra: string): Observable<any> {
      console.log(usu_contra, correo);
      console.log(this.URLLogin);
    
      // Construye los parámetros de consulta
      const params = new HttpParams()
        .set('correo', correo)
        .set('password', usu_contra);
    
      // Realiza la solicitud GET con los parámetros de consulta
      return this.http.get<any>(this.URLLogin, { params });
    }

  
}
 
  