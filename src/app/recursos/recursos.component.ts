import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { RecursosService } from './recursos.service';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { Recursos } from '../modelo/Recursos';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css'],
 
})
export class RecursosComponent implements OnInit  {

////////////////////////////////////////
@ViewChild('fileInput') fileInput!: ElementRef;

showForm: boolean = false;


 ////////////////////////////////////////imgSeleccionada se agrego en el constructor

  constructor(private recursosService: RecursosService ) { }
  
  recursos: Recursos[] = [];
  recursosOriginal: Recursos[] = [];
  recurso: Recursos = new Recursos()
  private imgSeleccionada!: File;

  formRecursos: FormGroup = new FormGroup({});
  isupdate: boolean = false;
  
  


   buscarTexto: string = '';
buscarCodigo: number=0;

buscarRecurso() {
  const textoBusqueda = this.buscarTexto.trim().toLowerCase();

  if (textoBusqueda === '') {
    this.recursos = this.recursosOriginal.slice(); // Restaurar la lista original cuando la búsqueda está vacía
  } else {
    this.recursos = this.recursosOriginal.filter((recurso) =>
      recurso.rec_nombre.toLowerCase().includes(textoBusqueda)
    );
  }
}

buscarUsuarioPorCodigo() {
  const codigoBusqueda = this.buscarCodigo.toString().trim();

  if (codigoBusqueda === '') {
    this.recursos = this.recursosOriginal.slice(); // Restaurar la lista original cuando la búsqueda está vacía
  } else {
    this.recursos = this.recursosOriginal.filter((recurso) =>
      recurso.id_recurso.toString().includes(codigoBusqueda)
    );
  }
}


  ngOnInit(): void { 
    this.list();
    this.formRecursos = new FormGroup({
      id_recurso: new FormControl(''),
      rec_nombre: new FormControl('', Validators.required),
      rec_lec: new FormControl(''),
      rec_enlaces: new FormControl('', [Validators.pattern(/^https?:\/\/\S+$/i)]),
      rec_img: new FormControl('')
      
    });
  }

  list(): void {
    this.recursosService.ListarRecursos().subscribe(resp => {
      if (resp) {
        this.recursosOriginal = resp; 
        this.recursos = resp;
      }
    });
  }

  update(): void {
    this.recursosService.ModificarRecurso(this.formRecursos.value).subscribe(resp => {
      if (resp) {
        this.list();
        this.formRecursos.reset();
      }
    });
  }

 

 


  deletee(id: any) {
    Swal.fire({
      title: '¿Estás seguro de eliminar este recurso?',
      text: "No podrás revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4361ee',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.recursosService.EliminarRecursos(id).subscribe(
          () => {
            // Filtras el recurso eliminado de la lista actual
            this.recursos = this.recursos.filter(recurso => recurso.id_recurso !== id);
            Swal.fire(
              'Eliminado!',
              'El recurso ha sido eliminado',
              'success'
            )
          },
          (error) => {
            console.error('Error al eliminar el recurso:', error);
            Swal.fire(
              'No se puede eliminar este Recurso',
              'Recurso se esta ocupando',
              'error'
            )
          }
        );
      }
    });
  }
  









  newRecurso(): void {
    this.isupdate = false;
    this.formRecursos.reset();
  }

  selectItem(item: any): void {
    this.isupdate = true;
    this.formRecursos.controls['id_recurso'].setValue(item.id_recurso);
    this.formRecursos.controls['rec_nombre'].setValue(item.rec_nombre);
    this.formRecursos.controls['rec_lec'].setValue(item.rec_lec);
    this.formRecursos.controls['rec_enlaces'].setValue(item.rec_enlaces);
    this.formRecursos.controls['rec_img'].setValue(item.rec_img);
   
  }


  savee(): void {
  // Verificar si el formulario es válido
  if (this.formRecursos.valid) {
    // Asignar los valores del formulario al objeto recurso

    this.recurso.rec_nombre = this.formRecursos.get('rec_nombre')?.value;
    this.recurso.rec_lec = this.formRecursos.get('rec_lec')?.value;
    this.recurso.rec_enlaces = this.formRecursos.get('rec_enlaces')?.value;

    // Llamar al servicio para guardar el recurso en el servidor
    this.recursosService.postRecursos(this.recurso).subscribe(
      recurso => {
        // Actualizar la lista de recursos con el nuevo recurso guardado
        this.recursos.push(recurso);
        this.formRecursos.reset();
        Swal.fire('Recurso Guardado', `Recurso guardado con éxito`, 'success');
      },
      error => {
        console.error('Error al guardar el recurso:', error);
        Swal.fire('Error', 'Hubo un problema al guardar el recurso', 'error');
      }
    );
  } else {
    // Si el formulario no es válido, muestra un mensaje de error
    Swal.fire('Formulario no válido', 'Por favor, verifica los campos del formulario', 'warning');
  }
}


  ///////////////////////////////////imagen
  seleccionarFoto(event: any){
    this.imgSeleccionada = event.target.files[0];
    console.log(this.imgSeleccionada);
  }
  subirImg(){
    this.recursosService.subirFoto(this.imgSeleccionada, this.recurso.id_recurso)
    .subscribe(recurso => {
      this.recurso = recurso;
    })
  }

  //METODOS EN USO PARA CARGA DE IMAGENES
  async loadProductoImg(event: any){
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    try{
      if(!allowedTypes.includes(file.type)){
        alert("solo se permiten archivos de tipo jpeg, jpg o png");
      }else{
        this.recurso.rec_img = await this.convertToBase64(file);
      }
    } catch(error){
      console.error(error);
    }
  }
  
  async convertToBase64(file: File): Promise<string>{
    const reader = new FileReader();
    return new Promise<string>((resolve, reject)=>{
      reader.onload = () => {
        const result = btoa(reader.result as string);
        resolve(result);
      };
      reader.onerror = ()=>{
        reject(reader.error);
      };
      reader.readAsBinaryString(file);
    });
  }


  
}
