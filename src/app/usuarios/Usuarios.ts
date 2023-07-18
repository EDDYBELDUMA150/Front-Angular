import { Roles } from "./Roles";

export class Usuarios{
    id_usuario:number=0;
    usu_nombre:String="";
    usu_contra:String="";
    usu_correo:String="";
    usu_nivelacademico="";
    roles: Roles; 

    Usuarios(){}

    constructor() {
        this.roles = new Roles(1, "ADMINISTRADOR"); // Inicializa la propiedad 'roles' como una instancia de la clase 'Roles'
      }
   
}
    