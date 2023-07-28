import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recursos } from '../modelo/Recursos';
import { tipoAprendizaje } from '../modelo/TipoAprendizaje';
import { Actividad } from '../modelo/Actividad';


@Injectable({
  providedIn: 'root'
})
export class AdminActivService {
  private recursosUrl = 'http://localhost:8080/api/recursos';
  private tipoAprendizajeUrl = 'http://localhost:8080/api/tipoapren';
  private actividadesUrl = 'http://localhost:8080/api/actividad';
 

   
  constructor(private http: HttpClient) {}
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  //Obtener los datos de Tipo de aprendizaje
  obtenerAprendizaje(): Observable<tipoAprendizaje[]> {
    return this.http.get<tipoAprendizaje[]>(this.tipoAprendizajeUrl+'/list').pipe(
      map(response => response as tipoAprendizaje[])
    )
  }

   

  //Obtener los datos de los Recursos
  obtenerRecursos(): Observable<Recursos[]> {
    return this.http.get<Recursos[]>(this.recursosUrl+'/list').pipe(
      map(response => response as Recursos[])
    );
  }
  



  ListarActividad(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(this.actividadesUrl+'/list').pipe(
      map(response => response as Actividad[])
    );
  }





}
