import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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
  constructor(private http: HttpClient, private router: Router) { }

  obtenerUsuarioRol(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URLlistarUsu);
  }
  getUsuarioUserPass(usua:Usuarios){
    return this.http.get<Usuarios>(this.URLlistarUsu+"/usuarios/"+usua.correo+"/"+usua.usu_contra);
  }
 

  
}
 
  