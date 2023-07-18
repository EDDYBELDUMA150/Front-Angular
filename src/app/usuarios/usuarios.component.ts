import { Component } from '@angular/core';
import { Usuarios } from './Usuarios';
import { UsuariosService } from './usuarios.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Roles } from './Roles';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  

  constructor(private usuariosService:UsuariosService){}
  usuarios: Usuarios[] = []

   /////////////////////////////////////
   selectedRoleId: number=0;

   ///////////////////////////
  roles: Roles[] = [];


  formUsuarios: FormGroup = new FormGroup({});

  isupdate: boolean=false;

    ngOnInit(): void{ 

    
    this.obtenerRoles();
    this.list();
    this.formUsuarios= new FormGroup({
      id_usuario: new FormControl(''),
      usu_nombre: new FormControl(''),
      usu_contra: new FormControl(''),
      usu_correo: new FormControl(''),
      usu_nivelacademico: new FormControl(''),
      id_rol: new FormControl('')
      
      
      
      });
  }

  
  

 obtenerRoles() {
  this.usuariosService.obtenerRoles().subscribe(
    (response: any[]) => {
      this.roles = response; // Asigna la lista de roles a la variable roles en el componente
    },
    (error) => {
      console.log(error);
    }
  );
}

save(){
  const usuario = this.formUsuarios.value;
  const idRol = usuario.id_rol; // Obtén el id_rol del formulario

  // Asigna el id_rol al objeto usuario
  usuario.id_rol = idRol;
   
  this.usuariosService.postUsuarios(this.formUsuarios.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formUsuarios.reset();
        
        Swal.fire('Usuario Registrado', `Usuario  registrado con exito`, 'success')
      }
  });
}


savee() {
  if (this.formUsuarios.valid) {
    const usuario = this.formUsuarios.value;
    //console.log(" id de rol: "+usuario.id_rol);
    const idRol = usuario.id_rol; // Obtén el id_rol del formulario


    // Asigna el id_rol al objeto usuario

    usuario.roles = new Roles(idRol,"admin");;
    console.log("despues del rol");



    this.usuariosService.create(usuario).subscribe(
      (resp) => {
        this.list();
        this.formUsuarios.reset();
        Swal.fire('Usuario Registrado', 'Usuario registrado con éxito', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Ocurrió un error al registrar el usuario', 'error');
      }
    );
  }
}




   
  list(){
    this.usuariosService.ListarUsuarios().subscribe(resp=>{
         if(resp){
          this.usuarios=resp;
         }
    });
  }

  

 
  




  update(){
    this.usuariosService.ModificarUsuarios(this.formUsuarios.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formUsuarios.reset();
      }
    });
  }


  delete(id: any){
    this.usuariosService.EliminarUsuarios(id).subscribe(resp=>{
      if(resp){
        this.list();
        
      }
  });
  }

  eliminarUsuario(id: any) {
    Swal.fire({
      title: '¿Estas seguro de eliminar este usuario?',
      text: "No podras revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4361ee',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.usuariosService.EliminarUsuarios(id).subscribe(
          usuarios => {
            this.usuariosService.getUsuarios().subscribe(
              response => this.usuarios = response
            )
            Swal.fire(
              'Eliminado!',
              'El usuario ha sido eliminado'
            )
          })
      }
    })
  }






  newUsuario(){
    this.isupdate=false;
    this.formUsuarios.reset();
  }

  selectItem(item: any){
    this.isupdate = true;
    this.formUsuarios.controls['id_usuario'].setValue(item.id_usuario);
    this.formUsuarios.controls['usu_nombre'].setValue(item.usu_nombre);
    this.formUsuarios.controls['usu_contra'].setValue(item.usu_contra);
    this.formUsuarios.controls['usu_correo'].setValue(item.usu_correo);
    this.formUsuarios.controls['usu_nivelacademico'].setValue(item.usu_nivelacademico);
   
  }

}
