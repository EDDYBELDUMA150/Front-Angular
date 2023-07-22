import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  private rol: string="";

  constructor() {}

  setRol(rol: string) {
    this.rol = rol;
  }

  getRol(): string {
    return this.rol;
  }

  esAdmin(): boolean {
    return this.rol === 'Administrador';
  }

  esVendedor(): boolean {
    return this.rol === 'Vendedor';
  }
 

}

