import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { tipoAprendizaje } from '../modelo/TipoAprendizaje';

@Injectable({
  providedIn: 'root'
})
export class AprendizajeService {
  constructor(private http:HttpClient) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  UrlListar='http://localhost:8080/api/tipoapren';
  UrlBuscar='';

  //METODOS PARA EL CRUD
  getAprndizaje():Observable<tipoAprendizaje[]>{
    return this.http.get<tipoAprendizaje[]>(this.UrlListar+'/list').pipe(
      map(response => response as tipoAprendizaje[])
    )
  }

  postAprendizaje(request:any):Observable<any>{
    return this.http.post<any>(this.UrlListar + '/create', request).pipe(
      map(response => response as tipoAprendizaje[])
    )

  }
  EliminarAprendizaje(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlListar+'/delete/'+id).pipe(
      map(response => response as tipoAprendizaje[])
    )

  }
  ModificarAprendizaje(request: any): Observable<any> {
    const id = request.id_tipo_apren;
    return this.http.put<any>(`${this.UrlListar}/update/${id}`, request).pipe(
      map(response => response as tipoAprendizaje[])
    );
  }
  
  
  ListarAprendizaje(): Observable<tipoAprendizaje[]> {
    return this.http.get<tipoAprendizaje[]>(this.UrlListar+'/list').pipe(
      map(response => response as tipoAprendizaje[])
    );
  }
  
  
}
