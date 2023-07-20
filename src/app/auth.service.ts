import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private listarAdmin: string = 'http://localhost:8080/api/usuarios/list/admin';
  private listarJugador: string = 'http://localhost:8080/api/usuarios/list/jugador';

  constructor(private http: HttpClient) { }

  // Método para obtener el rol del usuario autenticado
  getRolAdmin(): Observable<string> {
    return this.http.get<string>(`${this.listarAdmin}`);
  }
  getRolJugador(): Observable<string> {
    return this.http.get<string>(`${this.listarAdmin}`);
  }

  // Método para verificar si el usuario es Administrador
  esAdmin(): Observable<boolean> {
    return this.getRolAdmin().pipe(
      map(rol => rol === 'Administrador')
    );
  }

  // Método para verificar si el usuario es Jugador
  esJugador(): Observable<boolean> {
    return this.getRolAdmin().pipe(
      map(rol => rol === 'Jugador')
    );
  }

}

