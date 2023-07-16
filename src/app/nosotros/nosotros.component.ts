import { Component, OnInit } from '@angular/core';
import { datosChicos } from './nosotros.json';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit{
  titulo=";>";
  nosotros = datosChicos;
  
  constructor(){

  }
  ngOnInit(): void {
  }
}
