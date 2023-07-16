import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Aprendizaje } from './aprendizaje';

@Injectable({
  providedIn: 'root'
})
export class AprendizajeService {
  constructor(private http:HttpClient) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  UrlListar='http://localhost:8080/api/tipoapren';
  UrlBuscar='';

  //METODOS PARA EL CRUD
  getAprndizaje():Observable<Aprendizaje[]>{
    return this.http.get<Aprendizaje[]>(this.UrlListar+'/list').pipe(
      map(response => response as Aprendizaje[])
    )
  }

  postAprendizaje(request:any):Observable<any>{
    return this.http.post<any>(this.UrlListar + '/create', request).pipe(
      map(response => response as Aprendizaje[])
    )

  }
  EliminarAprendizaje(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlListar+'/delete/'+id).pipe(
      map(response => response as Aprendizaje[])
    )

  }
  ModificarAprendizaje(request: any): Observable<any> {
    const id = request.id_tipo_apren;
    return this.http.put<any>(`${this.UrlListar}/update/${id}`, request).pipe(
      map(response => response as Aprendizaje[])
    );
  }
  
  
  ListarAprendizaje(): Observable<Aprendizaje[]> {
    return this.http.get<Aprendizaje[]>(this.UrlListar+'/list').pipe(
      map(response => response as Aprendizaje[])
    );
  }
  
  
}
