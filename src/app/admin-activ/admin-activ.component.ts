import { Component } from '@angular/core';
import { AdminActivService } from './admin-activ.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Recursos } from '../modelo/Recursos';
import { tipoAprendizaje } from '../modelo/TipoAprendizaje';
import { Actividad } from '../modelo/Actividad';
import Swal from 'sweetalert2';

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
  selectedItemId: number=0;
  //Recupera los daatos del combo box seleccionado
  selectedRecid:number=0;
  selectedAid:number=0;

  isupdate: boolean=false;
  constructor(private adminActivService: AdminActivService) {}

  ngOnInit(): void {
    this.obtenerAprendizaje();
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

  obtenerAprendizaje() {
    this.adminActivService.ListarRecursos().subscribe(
      (response: any[]) => {
        this.aprendizaje = response; // Asigna la lista de roles a la variable roles en el componente
      },
      (error) => {
        console.log(error);
      }
    );
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


  savee() {
    if (this.formactiv.valid) {
      const actividad = this.formactiv.value;
      //console.log(" id de rol: "+usuario.id_rol);
      const id_tipo_apren = actividad.id_tipo_apren; // Obtén el id_rol del formulario
       
      //obteber recurso del fromulario
      const  id_recurso=actividad.id_recurso;

  
      // Asigna el id_recurdo y id_aprendizaje  al objeto actividad
  
      actividad.aprendizaje = new tipoAprendizaje (id_tipo_apren,"recurso",0);;
      actividad.recursos= new Recursos(id_recurso,"Leer");;
      //console.log("despues del rol");
      
  
  
      this.adminActivService.CrearActividad(actividad).subscribe(
        (resp) => {
          this.cargarActividades;
          this.formactiv.reset();
          Swal.fire('Actividad Registrado', 'Actividad registrado con éxito', 'success');
        },
        (error) => {
          console.log(error);
          Swal.fire('Error', 'Ocurrió un error al registrar la actividad', 'error');
        }
      );
    }
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
