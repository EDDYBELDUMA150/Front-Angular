import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoApp1Service {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}
  getCountAdministradores(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/usuarios/count/admin`);
  }

  getCountJugadores(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/usuarios/count/jugador`);
  }

  getCountAprendizajes(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/tipoapren/count`);
  }

  getCountActividades(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/actividades/count`);
  }
  
}
