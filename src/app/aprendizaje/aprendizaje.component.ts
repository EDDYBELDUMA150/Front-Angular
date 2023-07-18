import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AprendizajeService } from './aprendizaje.service';
import { tipoAprendizaje } from '../modelo/TipoAprendizaje';

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
       tapr_nombre: new FormControl(''),
       tapr_progreso: new FormControl('')
       
     });
   }
 
   
    
   list(){
     this.aprendizajeService.ListarAprendizaje().subscribe(resp=>{
          if(resp){
           this.aprendizaje=resp;
          }
     });
   }
 
   save(){
     this.aprendizajeService.postAprendizaje(this.formAprendizaje.value).subscribe(resp=>{
         if(resp){
           this.list();
           this.formAprendizaje.reset();
         }
     });
   }
 
   update() {
    const id = this.selectedItemId;
    const request = {
      id_tipo_apren: id,
      ...this.formAprendizaje.value
    };
  
    this.aprendizajeService.ModificarAprendizaje(request).subscribe(resp => {
      if (resp) {
        this.list();
        this.formAprendizaje.reset();
      }
    });
  }
  
   delete(id: any){
     this.aprendizajeService.EliminarAprendizaje(id).subscribe(resp=>{
       if(resp){
         this.list();
         
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
