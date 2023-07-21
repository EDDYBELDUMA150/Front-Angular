import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuarios } from './Usuarios';

import { Roles } from "./Roles";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

 


  constructor(private http:HttpClient) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  UrlListar='http://localhost:8080/api/usuarios';
  UrListarR='http://localhost:8080/api/roles';
//////////////////////////////////////////////////////


  UrlListarRol='http://localhost:8080/api';

  obtenerRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.UrListarR+'/list').pipe(
      map(response => response as Roles[])
    )
  }




  getUsuarios():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.UrlListar+'/list').pipe(
      map(response => response as Usuarios[])
    )
  }

  postUsuarios(request:any):Observable<any>{
    

    return this.http.post<any>(this.UrlListar + '/create', request).pipe(
      map(response => response as Usuarios[])
    )

  }


  create(request: any): Observable<any> {
   
    return this.http.post<any>(this.UrlListar + '/create', request).pipe(
      map(response => response as Usuarios[])
    );
  }

  



  EliminarUsuarios(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlListar+'/delete/'+id).pipe(
      map(response => response as Usuarios[])
    )

  }
  ////////////////////////////////////////
  ModificarUsuarios(request:any):Observable<any>{
    return this.http.post<any>(this.UrlListar+'/update', request).pipe(
      map(response => response as Usuarios[])
    )

  }
  updateUsuario(userId: number, request: any): Observable<any> {
    return this.http.put<any>(`${this.UrlListar}/update/${userId}`, request).pipe(
      map(response => response as Usuarios)
    );
  }






  ///////////////////////////////////////////////////
  ListarUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.UrlListar+'/list').pipe(
      map(response => response as Usuarios[])
    );
  }

}
