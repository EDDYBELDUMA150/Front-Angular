import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuarios } from './ver';

@Injectable({
  providedIn: 'root'
})
export class VerUserRolService {

  private apiUrl = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

 

  ListarAdmnin(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.apiUrl+'/usuarios/list/admin').pipe(
      map(response => response as Usuarios[])
    );
  }

  ListarJugador():Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.apiUrl+'/usuarios/list/Jugador').pipe(
      map(response => response as Usuarios[])
    );
  }
  
}
