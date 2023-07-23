import { Roles } from "./Roles";

export class Usuarios{
    id_usuario:number=0;
    usu_nombre:string="";
    usu_contra:string="";
    correo:string="";
    usu_nivelacademico="";
    roles: Roles; 

    Usuarios(){}

    constructor() {
        this.roles = new Roles(1, "ADMINISTRADOR"); // Inicializa la propiedad 'roles' como una instancia de la clase 'Roles'
      }
   
}
    