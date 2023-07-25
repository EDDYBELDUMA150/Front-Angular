import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Niveles } from '../modelo/Niveles';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {

  constructor(private http:HttpClient) { }
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  UrlListar='http://localhost:8080/api/niveles';
  UrlBuscar='';

  //METODOS PARA EL CRUD
  getAprndizaje():Observable<Niveles[]>{
    return this.http.get<Niveles[]>(this.UrlListar+'/list').pipe(
      map(response => response as Niveles[])
    )
  }

  postAprendizaje(request:any):Observable<any>{
    return this.http.post<any>(this.UrlListar + '/create', request).pipe(
      map(response => response as Niveles[])
    )

  }
  EliminarAprendizaje(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlListar+'/delete/'+id).pipe(
      map(response => response as Niveles[])
    )

  }
  ModificarAprendizaje(request: any): Observable<any> {
    const id = request.id_nivel;
    return this.http.put<any>(`${this.UrlListar}/update/${id}`, request).pipe(
      map(response => response as Niveles[])
    );
  }
  
  
  ListarAprendizaje(): Observable<Niveles[]> {
    return this.http.get<Niveles[]>(this.UrlListar+'/list').pipe(
      map(response => response as Niveles[])
    );
  }
  

}
