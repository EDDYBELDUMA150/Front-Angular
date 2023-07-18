import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Recursos } from '../modelo/Recursos';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  
  constructor(private http:HttpClient) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  //URL DE LOS DISTINTOS METODOS
  
  UrlListar='http://localhost:8080/api/recursos';
  //METODOS PARA LLAMAR A LA PAI
  //METODO BUSCAR
  getRecursos():Observable<Recursos[]>{
    return this.http.get<Recursos[]>(this.UrlListar+'/list').pipe(
      map(response => response as Recursos[])
    )
  }

  postRecursos(request: FormData): Observable<any> {
    return this.http.post<any>(this.UrlListar + '/create', request);
  }
  
  
  
  EliminarRecursos(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlListar+'/delete/'+id).pipe(
      map(response => response as Recursos[])
    )

  }
  ModificarRecurso(request:any):Observable<any>{
    return this.http.post<any>(this.UrlListar+'/update', request).pipe(
      map(response => response as Recursos[])
    )

  }
  ListarRecursos(): Observable<Recursos[]> {
    return this.http.get<Recursos[]>(this.UrlListar+'/list').pipe(
      map(response => response as Recursos[])
    );
  }
  

}
