import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuarios } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: string="";
  password: string="";
  private baseUrl="http://localhost:8080/api/usuarios"
  constructor(private http: HttpClient) { }

  // Realizar la solicitud HTTP a la API de Spring Boot para autenticar al usuario
  
}
