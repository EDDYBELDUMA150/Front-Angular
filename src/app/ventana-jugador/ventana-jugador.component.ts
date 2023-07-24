import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../usuarios/Usuarios';
import { AutenticacionService } from '../shared/autenticacion.service';
import { Jugador } from '../modelo/Jugador';

@Component({
  selector: 'app-ventana-jugador',
  templateUrl: './ventana-jugador.component.html',
  styleUrls: ['./ventana-jugador.component.css']
})
export class VentanaJugadorComponent {

  usuarioLogueado?: any; // Cambia el tipo 'any' al tipo correcto según la estructura del objeto del usuario logueado
   
  constructor(private autenticacionService: AutenticacionService , private router: Router) { }
  
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
    }

    if (this.usuarioLogueado.jugador?.player_nombre) {
      console.log('Datos del progreso:', this.usuarioLogueado.jugador.player_nombre);
    }

    
  } else {
    console.log('Los datos del usuario logueado aún no están disponibles.');
  }

  }

  //METODOS PARA REDIRIGIR LAS VENTANAS SIN QUE SE BORRE LOS DATOS OBTENIDOS DEL SERVICIO
  redirectToInicio(): void {
    this.router.navigate(['/ventanaj/scroll']);
  }

  // Método para redirigir a la ruta '/ventanaj/progress'
  redirectToProgreso(): void {
    this.router.navigate(['/ventanaj/progress']);
  }

  // Método para cerrar sesión (redirigir a la página de inicio de sesión, por ejemplo)
  cerrarSesion(): void {
    // Implementa el código necesario para cerrar sesión, por ejemplo, limpiar la información de usuario en el servicio AutenticacionService
    // Luego redirige a la página de inicio de sesión:
    this.router.navigate(['/login']);
  }


}
