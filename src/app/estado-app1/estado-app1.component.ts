import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart, registerables} from "node_modules/chart.js";
import { EstadoApp1Service } from './estado-app1.service';
Chart.register(...registerables);

@Component({
  selector: 'app-estado-app1',
  templateUrl: './estado-app1.component.html',
  styleUrls: ['./estado-app1.component.css']
})
export class EstadoApp1Component implements OnInit {
  countAdministradores: number | undefined;
  countJugadores: number | undefined;
  countAprendizajes: number | undefined;
  countActividades: number | undefined;
  chart?: Chart;

  constructor(private apiService: EstadoApp1Service) {}

  ngOnInit(): void {
    this.apiService.getJugadoresRegistradosPorDia().subscribe(
      data => {
        // Procesar los datos y crear la gráfica
        const labels = ['Jueves', 'Viernes', 'Sabado', 'Domingo', 'Lunes', 'Sabado', 'Domingo'];
        const dataValues = Object.values(data) as number[];

        this.RenderChart(labels, dataValues);
      },
      error => {
        console.error('Error al obtener los datos', error);
      }
    );

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

  //LOGICA PARA LA GRAFICA DE JUGADORES REGISTRADOS POR DÍA
  RenderChart(labels: string[], dataValues: number[]) {
    const ctx = document.getElementById('myChart');

    if (this.chart) {
      // Si ya existe un gráfico, destruirlo antes de crear uno nuevo
      this.chart.destroy();
    }

    this.chart = new Chart(ctx as any, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Jugadores registrados por día',
          data: dataValues,
          borderWidth: 1,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}