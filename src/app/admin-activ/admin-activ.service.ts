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
  private General = 'http://localhost:8080/api/actividad';

   
  constructor(private http: HttpClient) {}
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
   //Obtener los datos de Tipo de aprendizaje
  ListarAprendizaje(): Observable<tipoAprendizaje[]> {
    return this.http.get<tipoAprendizaje[]>(this.tipoAprendizajeUrl+'/list').pipe(
      map(response => response as tipoAprendizaje[])
    );
  }
  //Obtener los datos de los Recursos
  ListarRecursos(): Observable<Recursos[]> {
    return this.http.get<Recursos[]>(this.recursosUrl+'/list').pipe(
      map(response => response as Recursos[])
    );
  }
  

  //CRUD PRINCIPAL DE LA ACTIVIDAD
  CrearActividad(request:any):Observable<any>{
    return this.http.post<any>(this.actividadesUrl + '/create', request).pipe(
      map(response => response as Actividad[])
    )

  }

  modificarActividad(actividad: Actividad): Observable<Actividad> {
    const url = `${this.General}/update/${actividad.id_activ}`;
    return this.http.put<Actividad>(url, actividad);
  }

  eliminarActividad(id: number): Observable<any> {
    const url = `${this.General}/delete/${id}`;
    return this.http.delete(url);
  }
  //Mostrar Actividades
  getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(this.General+'/list');
  }


}
