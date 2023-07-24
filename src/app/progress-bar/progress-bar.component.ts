import { Component } from '@angular/core';
import { AutenticacionService } from '../shared/autenticacion.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  usuarioLogueado?: any; // Cambia el tipo 'any' al tipo correcto según la estructura del objeto del usuario logueado
   
  constructor(private autenticacionService: AutenticacionService , private router: Router , private http:HttpClient) { }
   //inicializa el json con los datos del usuario logeado traidos desde el back
  ngOnInit(): void {
    this.usuarioLogueado = this.autenticacionService.getUsuarioLogueado();
    
    
  }

 
  
  
  getProgresoPorTipoAprendizaje(tipoAprendizajeId: number): number {
    // Verificar si el objeto 'progresoAprendizaje' está definido y si tiene la propiedad 'tipoAprendizaje'
    if (this.usuarioLogueado.jugador.progreso && this.usuarioLogueado.jugador.progreso.progresoAprendizaje.tipoAprendizaje) {
      const progresoAprendizaje = this.usuarioLogueado.jugador.progreso.progresoAprendizaje.tipoAprendizaje;
      console.log('Datos del prpgreso 2:', this.usuarioLogueado.jugador.actividad.tipoAprendizaje.tapr_progreso);
      // Verificar si el objeto 'progresoAprendizaje' tiene la propiedad correspondiente al ID del tipo de aprendizaje
      if (progresoAprendizaje.id_tipo_apren  === tipoAprendizajeId) {
        return progresoAprendizaje.tapr_progreso; // Devuelve el progreso del aprendizaje si el ID coincide
      } else {
        return 0; // Si el ID no coincide o el objeto 'tipoAprendizaje' no está presente, devolver 0 o el valor que desees
      }
    } else {
      return 0; // Si el objeto 'progresoAprendizaje' no está presente, devolver 0 o el valor que desees
    }
  }

 
  

  
  
  getProgresoTransform(tipoAprendizaje: number): string {
    const progreso = this.getProgresoPorTipoAprendizaje(tipoAprendizaje);
    const degrees = (progreso * 1.8) - 90; // El valor 1.8 es la relación entre el progreso y los grados de la circunferencia
    return `rotate(${degrees}deg)`;
  }
  getProgresoTransform1(tipoAprendizaje: number): string {
    const progreso = this.getProgresoPorTipoAprendizaje(tipoAprendizaje);
    const degrees = (progreso * 1.8) - 90; // El valor 1.8 es la relación entre el progreso y los grados de la circunferencia
    return `rotate(${degrees}deg)`;
  }
}
