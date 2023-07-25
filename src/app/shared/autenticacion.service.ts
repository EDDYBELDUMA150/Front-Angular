import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../modelo/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private readonly USER_STORAGE_KEY = 'user_data';

  constructor(private http: HttpClient) { }

  login(correo: string, usu_contra: string): Observable<any> {
    const params = new HttpParams()
      .set('correo', correo)
      .set('password', usu_contra);

    return this.http.get<any>('http://localhost:8080/api/usuarios/loginR', { params });
  }

  setUsuarioLogueado(usuario: Usuarios): void {
    localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(usuario));
  }

  getUsuarioLogueado(): Usuarios | null {
    const userDataJSON = localStorage.getItem(this.USER_STORAGE_KEY);
    return userDataJSON ? JSON.parse(userDataJSON) : null;
  }

  clearUsuarioLogueado(): void {
    localStorage.removeItem(this.USER_STORAGE_KEY);
  }
}

 
  