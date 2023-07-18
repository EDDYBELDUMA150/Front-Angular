import { Recursos } from "./Recursos";
import { tipoAprendizaje } from "./TipoAprendizaje";

export class Actividad{
    id_activ:number=0;
    act_nombre?:string;
    act_descripcion?: string;
    act_dificultad?: string;
    act_puntaje_max?:string;
    act_puntaje_min?:string;
    act_puntaje_alcanzado?: string;
    act_estado?: string;
    id_recursor?:Recursos ;
    id_tipo_apren?:tipoAprendizaje;

    constructor(id_activ?: number, id_recursor?: Recursos ,id_tipo_apren?:tipoAprendizaje, act_nombre?:string, act_descripcion?: string,  act_dificultad?: string,
        act_puntaje_max?:string, act_puntaje_min?:string,act_puntaje_alcanzado?: string, act_estado?: string ){
            this.id_activ=id_activ||0;
            this.act_nombre=act_nombre||'';
            this.act_descripcion=act_descripcion||'';
            this.act_dificultad=act_dificultad||'';
            this.act_puntaje_max=act_puntaje_max||'';
            this.act_puntaje_min=act_puntaje_min||'';
            this.act_puntaje_alcanzado=act_puntaje_alcanzado||'';
            this.act_estado=act_estado||'';
            this.id_recursor=id_recursor||new Recursos;
            this.id_tipo_apren=id_tipo_apren||new tipoAprendizaje;
		
	}
}
