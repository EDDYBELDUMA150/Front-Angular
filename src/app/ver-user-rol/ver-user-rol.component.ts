import { Component } from '@angular/core';
import { VerUserRolService } from './ver-user-rol.service';
import { FormGroup } from '@angular/forms';
import { Usuarios, Usuarios2 } from './ver';


@Component({
  selector: 'app-ver-user-rol',
  templateUrl: './ver-user-rol.component.html',
  styleUrls: ['./ver-user-rol.component.css']
})
export class VerUserRolComponent {
  constructor(private usuariosService: VerUserRolService) { }
   admin: Usuarios[] = [];
   jugador: Usuarios[] = [];
  
  formAprendizaje: FormGroup = new FormGroup({});

  isupdate: boolean=false;
  selectedItemId: number | undefined;
  ngOnInit(): void {
      this.list();
      this.list2();
  }
  list(){
    this.usuariosService.ListarAdmnin().subscribe(resp=>{
         if(resp){
          this.admin=resp;
         }
    });
  }
  list2(){
    this.usuariosService.ListarJugador().subscribe(resp=>{
         if(resp){
          this.jugador=resp;
         }
    });
  }
 

}
