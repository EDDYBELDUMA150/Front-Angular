import { Component } from '@angular/core';
import { AdminActivService } from './admin-activ.service';
import { FormControl, FormGroup } from '@angular/forms';
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
  formactiv: FormGroup = new FormGroup({});
  

  isupdate: boolean=false;
  selectedItemId: number | undefined;
  constructor(private adminActivService: AdminActivService) {}

  ngOnInit(): void {
    this.cargarActividades();
    this.cargarRecursos();
    this.cargarTiposAprendizaje();
    this.formactiv= new FormGroup({
      id_activ: new FormControl(''),
      act_nombre: new FormControl(''),
      act_descripcion: new FormControl(''),
      act_dificultad: new FormControl(''),
      act_puntaje_max: new FormControl(''),
      act_puntaje_min: new FormControl(''),
      act_puntaje_alcanzado: new FormControl(''),
      estado: new FormControl(''),
      id_recurso: new FormControl(''), // Campo para capturar los recursos seleccionados
      tapr_nombre: new FormControl('')//Captura el aprendizaje seleccionado
       
     });

  }

  cargarActividades(): void {
    // Lógica para cargar las actividades desde el servicio
    this.adminActivService.getActividades().subscribe(actividades => {
      this.actividades = actividades;
    });
  }
 


  cargarRecursos(): void {
    // Lógica para cargar los recursos desde el servicio
    this.adminActivService.ListarRecursos().subscribe(recursos => {
      this.recursos = recursos;
    });
  }

  cargarTiposAprendizaje(): void {
    // Lógica para cargar los tipos de aprendizaje desde el servicio
    this.adminActivService.ListarAprendizaje().subscribe(tiposAprendizaje => {
      this.aprendizaje = tiposAprendizaje;
    });
  }
  delete(id: any){
    this.adminActivService.eliminarActividad(id).subscribe(resp=>{
      if(resp){
        this.cargarActividades;
        
      }
  });
  }
  newAprendizaje(){
    this.isupdate=false;
    this.formactiv.reset();
  }


  save() {
    const id_recursor = new Recursos();
    const id_tipo_apren = new tipoAprendizaje();
  
    const actividad = new Actividad(
      this.formactiv.value.id_activ,
      this.formactiv.value.activ_nombre,
      this.formactiv.value.activ_descripcion,
      this.formactiv.value.act_dificultad,
      this.formactiv.value.act_puntaje_max,
      this.formactiv.value.act_puntaje_min,
      this.formactiv.value.act_puntaje_alcanzado,
      this.formactiv.value.act_estado,
      
    );
  
    this.adminActivService.CrearApctividad(actividad).subscribe(resp => {
      if (resp) {
        this.cargarActividades();
        this.formactiv.reset();
      }
    });
  }
  
  
  update() {
    const id = this.selectedItemId;
    const request = {
      id_tipo_apren: id,
      ...this.formactiv.value
    };
 
  }
  selectItem(item: any){
    this.selectedItemId = item.id_tipo_apren;
     this.isupdate = true;
     this.formactiv.controls['id_activ'].setValue(item.id_activ);
     this.formactiv.controls['act_nombre'].setValue(item.act_nombre);
     this.formactiv.controls['act_descripcion'].setValue(item.act_descripcion);
     this.formactiv.controls['act_dificultad'].setValue(item.act_dificultad);
     this.formactiv.controls['act_puntaje_max'].setValue(item.act_puntaje_max);
     this.formactiv.controls[' act_puntaje_alcanzado'].setValue(item.act_dificultad);
     this.formactiv.controls[' estado'].setValue(item.estado);
     this.formactiv.controls[' tapr_nombre'].setValue(item.tapr_nombre);
     this.formactiv.controls[' rec_enlaces'].setValue(item.rec_enlaces);
    }

}
