import { Component, ElementRef, ViewChild } from '@angular/core';
import { RecursosService } from './recursos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, finalize } from 'rxjs';
import { Recursos } from '../modelo/Recursos';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  constructor(private recursosService: RecursosService) { }

  recursos: Recursos[] = [];
  formRecursos: FormGroup = new FormGroup({});
  isupdate: boolean = false;

  ngOnInit(): void { 
    this.list();
    this.formRecursos = new FormGroup({
      id_recurso: new FormControl(''),
      rec_enlaces: new FormControl(''),
      rec_pdfs: new FormControl(''),
      rec_imagenes: new FormControl('')
    });
  }

  list(): void {
    this.recursosService.ListarRecursos().subscribe(resp => {
      if (resp) {
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

  delete(id: any): void {
    this.recursosService.EliminarRecursos(id).subscribe(resp => {
      if (resp) {
        this.list();
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
    this.formRecursos.controls['rec_enlaces'].setValue(item.rec_enlaces);
    this.formRecursos.controls['rec_pdfs'].setValue(item.rec_pdfs);
    this.formRecursos.controls['rec_imagenes'].setValue(item.rec_imagenes);
  }

  save(): void {
    
  }

  convertToBase64(file: File): Observable<string> {
    return new Observable<string>(observer => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        observer.next(base64data);
        observer.complete();
      };
      reader.onerror = error => {
        observer.error(error);
      };
    });
  }

  uploadFiles(formData: FormData): void {
    this.recursosService.postRecursos(formData).pipe(
      finalize(() => {
        this.list();
        this.formRecursos.reset();
      })
    ).subscribe();
  }
}
