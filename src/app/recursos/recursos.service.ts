import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Recursos } from './Recursos';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/recursos/create';

  postRecursos(){
    return this.http.post<Recursos>

  }
}
