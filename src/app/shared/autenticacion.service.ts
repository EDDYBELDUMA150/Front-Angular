import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, Observable } from 'rxjs';


import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuarios } from '../modelo/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  usuarioLogueado: Usuarios | undefined;
  private URLlistarUsu: string = 'http://localhost:8080/api';
  private URLLogin: string='http://localhost:8080/api/usuarios/loging';
  constructor(private http: HttpClient, private router: Router) { }

  obtenerUsuarioRol(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URLlistarUsu);
  }
 
  //PROBAR CON UN NUEVO METODO LOGIN :(
    /*logar(loginRequest: Usuarios): Observable<any> {
      return this.http.post<any>(this.URLLogin, loginRequest);
    }*/

    login(correo: string, usu_contra: string): Observable<any> {
      console.log(correo, usu_contra);
      console.log(this.URLLogin);
    
      // Construye los parámetros de consulta
      const params = new HttpParams()
        .set('correo', correo)
        .set('password', usu_contra);
    
      // Realiza la solicitud GET con los parámetros de consulta
      return this.http.get<any>(this.URLLogin, { params });
    }

    
    
    
    
    
    

    // Método para establecer los datos del usuario logueado
   // Método para establecer los datos del usuario loguead
   setUsuarioLogueado(usuario: Usuarios): void {
    this.usuarioLogueado = usuario;
  }

  // Método para obtener los datos del usuario logueado
  getUsuarioLogueado(): Usuarios | undefined {
    return this.usuarioLogueado;
  }
}
 
  