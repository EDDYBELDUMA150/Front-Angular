import { Component } from '@angular/core';
import { AdminActivService } from './admin-activ.service';
import { Recursos } from '../modelo/Recursos';
import { tipoAprendizaje } from '../modelo/TipoAprendizaje';
import { Actividad } from '../modelo/Actividad';


@Component({
  selector: 'app-admin-activ',
  templateUrl: './admin-activ.component.html',
  styleUrls: ['./admin-activ.component.css']
})
export class AdminActivComponent {
  
  actividades: Actividad[]=[];
  recursos: Recursos[] = [];
  aprendizaje: tipoAprendizaje[] = [];
 
  constructor(private adminActivService: AdminActivService) {}

buscarTexto: string = '';
buscarCodigo: number=0;


buscarActividad() {
  const textoBusqueda = this.buscarTexto.trim().toLowerCase();

  if (textoBusqueda === '') {
    this.list();
  } else {
    this.actividades = this.actividades.filter(actividades =>
      actividades.act_nombre.toLowerCase().includes(textoBusqueda) ||
      actividades.act_descripcion.toLowerCase().includes(textoBusqueda)
    );
  }
}

///////////////////////////////////////////////////////////////
buscarUsuarioPorCodigo() {
  const codigoBusqueda = this.buscarCodigo.toString().trim();

  if (codigoBusqueda === '') {
    this.list();
  } else {
    this.actividades = this.actividades.filter(actividades =>
      actividades.id_activ.toString().includes(codigoBusqueda)
    );
  }
}



  ngOnInit(): void {
    this.list();
    this.obtenerAprendizaje();
    this.obtenerRecursos();

  }

  obtenerAprendizaje(){
    this.adminActivService.obtenerAprendizaje().subscribe(
      (response: any[]) => {
        this.aprendizaje = response; // Asigna la lista de roles a la variable roles en el componente
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  obtenerRecursos(){
    this.adminActivService.obtenerRecursos().subscribe(
      (response: any[]) => {
        this.recursos = response;
        console.log(this.recursos) // Asigna la lista de roles a la variable roles en el componente
      },
      (error:any) => {
        console.log(error);
      }
    );
  }



  list() {
    this.adminActivService.ListarActividad().subscribe((resp) => {
      if (resp) {
        this.actividades = resp;
      }
    });
  }
 




  cargarTiposAprendizaje(): void {
    // Lógica para cargar los tipos de aprendizaje desde el servicio
    this.adminActivService.obtenerAprendizaje().subscribe(tiposAprendizaje => {
      this.aprendizaje = tiposAprendizaje;
    });
  }

 

}
