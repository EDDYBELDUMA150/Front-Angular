import { Injectable } from '@angular/core';
import { Usuarios } from './usuarios/Usuarios';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuntenticacionService {

  private URLlistarUsu: string = 'http://localhost:8080/api/usuarios';
  constructor(private http: HttpClient, private router: Router) { }

  getUsuarioUserPass(usua:Usuarios){
    return this.http.get<Usuarios>(this.URLlistarUsu+"/list/"+usua.correo+"/"+usua.usu_contra);
  }

}
