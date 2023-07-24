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

  ngOnInit(): void {
    this.usuarioLogueado = this.autenticacionService.getUsuarioLogueado();

  // Verificar si los datos del usuario logueado están disponibles
  if (this.usuarioLogueado) {
    console.log('Nombre del usuario logueado:', this.usuarioLogueado.jugador.usuarios.usu_nombre);
    console.log('Correo del usuario logueado:', this.usuarioLogueado.jugador.usuarios.correo);
    console.log('Correo del usuario logueado:', this.usuarioLogueado.correo);
    console.log('Rol del usuario logueado:', this.usuarioLogueado.roles);

    // También puedes acceder a los datos del jugador, progreso, actividad y tipo de aprendizaje si están presentes en el objeto 'usuarioLogueado'
    if (this.usuarioLogueado.jugador) {
      console.log('Datos del jugador:', this.usuarioLogueado.jugador);
      console.log('Datos del jugador:', this.usuarioLogueado.jugador.progreso.progresoAprendizaje.tipoAprendizaje.tapr_progreso);
    }

    if (this.usuarioLogueado.jugador?.player_nombre) {
      console.log('Datos del progreso:', this.usuarioLogueado.jugador.progreso.progresoAprendizaje.tipoAprendizaje);
    }

    
  } else {
    console.log('Los datos del usuario logueado aún no están disponibles.');
  }

  }

 

  
  getProgresoPorTipoAprendizaje(tipoAprendizajeId: number): number {
    // Verificar si el objeto 'progresoAprendizaje' está definido y si tiene la propiedad 'tipoAprendizaje'
    if (this.usuarioLogueado.jugador.progreso && this.usuarioLogueado.jugador.progreso.progresoAprendizaje) {
      const progresoAprendizaje = this.usuarioLogueado.jugador.progreso.progresoAprendizaje;
  
      // Verificar si el objeto 'progresoAprendizaje' tiene la propiedad correspondiente al ID del tipo de aprendizaje
      if (progresoAprendizaje.tipoAprendizaje.id_tipo_apren  === tipoAprendizajeId) {
        return progresoAprendizaje.tipoAprendizaje.tapr_progreso; // Devuelve el progreso del aprendizaje si el ID coincide
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
}
