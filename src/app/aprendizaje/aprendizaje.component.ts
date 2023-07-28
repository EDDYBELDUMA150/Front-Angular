import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AprendizajeService } from './aprendizaje.service';
import { tipoAprendizaje } from '../modelo/TipoAprendizaje';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aprendizaje',
  templateUrl: './aprendizaje.component.html',
  styleUrls: ['./aprendizaje.component.css']
})
export class AprendizajeComponent {

  constructor(private aprendizajeService:AprendizajeService){}
  aprendizaje: tipoAprendizaje[] = []
 
  formAprendizaje: FormGroup = new FormGroup({});

  isupdate: boolean=false;
  selectedItemId: number | undefined;

  ngOnInit(): void{ 
    this.list();
    this.formAprendizaje= new FormGroup({
      id_tipo_apren: new FormControl(''),
       tapr_nombre: new FormControl('', Validators.required),
       tapr_progreso: new FormControl('', Validators.required)
       
     });
   }
 
   
    
   list(){
     this.aprendizajeService.ListarAprendizaje().subscribe(resp=>{
          if(resp){
           this.aprendizaje=resp;
          }
     });
   }
 
   save() {
    if (this.formAprendizaje.valid) {
      this.aprendizajeService.postAprendizaje(this.formAprendizaje.value).subscribe(
        (resp) => {
          if (resp) {
            this.list();
            this.formAprendizaje.reset();
            Swal.fire('Aprendizaje Guardado', `Aprendizaje guardado con éxito`, 'success');
          }
        },
        (error) => {
          console.log(error);
          Swal.fire('Error', 'Ocurrió un error al guardar el aprendizaje', 'error');
        }
      );
    } else {
      // El formulario no es válido, muestra un mensaje de error
      Swal.fire('Campos Incompletos', 'Por favor, completa todos los campos obligatorios', 'warning');
      this.formAprendizaje.markAllAsTouched(); // Marca todos los campos como tocados para mostrar mensajes de error
    }
  }

   





 

  update() {
    const id = this.selectedItemId;
    const request = {
      id_tipo_apren: id,
      ...this.formAprendizaje.value
    };

    this.aprendizajeService.ModificarAprendizaje(request).subscribe(
      (resp) => {
        if (resp) {
          this.list();
          this.formAprendizaje.reset();
          Swal.fire('Actualizado', 'Aprendizaje actualizado con éxito', 'success');
        }
      },
      (error) => {
        console.error('Error al actualizar el aprendizaje:', error);
        Swal.fire('Error', 'Hubo un problema al actualizar el aprendizaje', 'error');
      }
    );
  }
  


   
   deletee(id: any) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este aprendizaje?',
      text: 'No podrás revertirlo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4361ee',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.aprendizajeService.EliminarAprendizaje(id).subscribe(
          () => {
            // Filtras el aprendizaje eliminado de la lista actual
            this.list();
            this.formAprendizaje.reset();
            Swal.fire('Eliminado!', 'El aprendizaje ha sido eliminado', 'success');
          },
          (error) => {
            console.error('Error al eliminar el aprendizaje:', error);
            Swal.fire('Error', 'Hubo un problema al eliminar el aprendizaje', 'error');
          }
        );
      }
    });
  }

   newAprendizaje(){
     this.isupdate=false;
     this.formAprendizaje.reset();
   }
 
   selectItem(item: any){
    this.selectedItemId = item.id_tipo_apren;
     this.isupdate = true;
     this.formAprendizaje.controls['id_tipo_apren'].setValue(item.id_tipo_apren);
     this.formAprendizaje.controls['tapr_nombre'].setValue(item.tapr_nombre);
     this.formAprendizaje.controls['tapr_progreso'].setValue(item.tapr_progreso);
    

    
     
   }
}
