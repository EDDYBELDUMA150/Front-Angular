import { Component } from '@angular/core';
import { EstadoApp1Service } from './estado-app1.service';


@Component({
  selector: 'app-estado-app1',
  templateUrl: './estado-app1.component.html',
  styleUrls: ['./estado-app1.component.css']
})
export class EstadoApp1Component {
  countAdministradores: number | undefined;
  countJugadores: number | undefined;
  countAprendizajes: number | undefined;
  countActividades: number | undefined;

  constructor(private apiService: EstadoApp1Service) {}

  ngOnInit(): void {
    this.apiService.getCountAdministradores().subscribe(count => {
      this.countAdministradores = count;
    });

    this.apiService.getCountJugadores().subscribe(count => {
      this.countJugadores = count;
    });

    this.apiService.getCountAprendizajes().subscribe(count => {
      this.countAprendizajes = count;
    });

    this.apiService.getCountActividades().subscribe(count => {
      this.countActividades = count;
    });
  }
}