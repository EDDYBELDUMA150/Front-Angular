import { Component } from '@angular/core';
import { Recursos } from './Recursos';
import { RecursosService } from './recursos.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {


  constructor(private recursosService:RecursosService){}
  recursos: Recursos[] = []
 
  formRecursos: FormGroup = new FormGroup({});

  isupdate: boolean=false;

  ngOnInit(): void{ 
   this.list();
   this.formRecursos= new FormGroup({
      id_recuroso: new FormControl(''),
      rec_enlaces: new FormControl(''),
      rec_pdfs: new FormControl(''),
      rec_imagenes: new FormControl('')
    });
  }

  
   
  list(){
    this.recursosService.ListarRecursos().subscribe(resp=>{
         if(resp){
          this.recursos=resp;
         }
    });
  }

  save(){
    this.recursosService.postRecursos(this.formRecursos.value).subscribe(resp=>{
        if(resp){
          this.list();
          this.formRecursos.reset();
        }
    });
  }

  update(){
    
    this.recursosService.ModificarRecurso(this.formRecursos.value).subscribe(resp=>{
        if(resp){
          this.list();
          this.formRecursos.reset();
        }
    });
  }
  delete(id: any){
    this.recursosService.EliminarRecursos(id).subscribe(resp=>{
      if(resp){
        this.list();
        
      }
  });
  }

  newRecurso(){
    this.isupdate=false;
    this.formRecursos.reset();
  }

  selectItem(item: any){
    this.isupdate = true;
    this.formRecursos.controls['id_recurso'].setValue(item.id_recurso);
    this.formRecursos.controls['rec_enlaces'].setValue(item.rec_enlaces);
    this.formRecursos.controls['rec_pdfs'].setValue(item.rec_pdfs);
    this.formRecursos.controls['rec_imagenes'].setValue(item.rec_imagenes);
    
  }



}
