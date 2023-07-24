import { Recursos } from "./Recursos";
import { tipoAprendizaje } from "./TipoAprendizaje";

export class Actividad{
    id_activ:number=0;
    act_nombre:string="";
    act_descripcion: string="";
    act_dificultad: string="";
    act_puntaje_max:string="";
    act_puntaje_min:string="";
    act_puntaje_alcanzado: string="";
    act_estado: string="";
    //recursos:Recursos ;
    aprendizaje:tipoAprendizaje;

    Actividad(){}

    constructor() {
        this.aprendizaje = new tipoAprendizaje(1,"Lectura",0); // Inicializa la propiedad 'aprendizaje' coo una instancia de la clase tipoAprendizaje
       // this.recursos = new Recursos(1,"Lectura_nivel1");//Inicializa la propiedad 'reursos' como una instancia en la clase recursos
    }
    

   
}
