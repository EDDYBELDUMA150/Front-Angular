import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Recursos } from './Recursos';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  
  constructor(private http:HttpClient) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  //URL DE LOS DISTINTOS METODOS
  UrlBuscar='http://localhost:8080/ap//recursos/search/{id}';
  UrlCrear= 'http://localhost:8080/api/recursos/create';
  UrlEliminar='http://localhost:8080/api/recursos/delete/{id}';
  UrlModificar='http://localhost:8080/api/recursos/update/{id}';
  UrlListar='http://localhost:8080/api/recursos/list';
  //METODOS PARA LLAMAR A LA PAI
  //METODO BUSCAR
  getRecursos():Observable<Recursos[]>{
    return this.http.get<Recursos[]>(this.UrlBuscar).pipe(
      map(response => response as Recursos[])
    )
  }

  postRecursos(request:any):Observable<any>{
    return this.http.post<any>(this.UrlCrear, request).pipe(
      map(response => response as Recursos[])
    )

  }
  EliminarRecursos(request:any):Observable<any>{
    return this.http.delete<any>(this.UrlEliminar).pipe(
      map(response => response as Recursos[])
    )

  }
  ModificarRecurso(request:any):Observable<any>{
    return this.http.post<any>(this.UrlModificar, request).pipe(
      map(response => response as Recursos[])
    )

  }
  ListarRecursos(): Observable<Recursos[]> {
    return this.http.get<Recursos[]>(this.UrlListar).pipe(
      map(response => response as Recursos[])
    );
  }
  

}
