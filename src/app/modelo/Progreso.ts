import { Time } from "@angular/common";

export class Progreso {
    id_progress: number;
    prog_fecha_init:String;
    prog_hora_promd: Time;
    prog_nivel: number;
    prog_puntaje_total: number;

    

    Progreso(){}

    constructor(id_progress: number, prog_fecha_init: string,  prog_hora_promd: Time, prog_nivel: number, prog_puntaje_total: number) {
        this.id_progress = id_progress;
        this.prog_fecha_init = prog_fecha_init;
        this.prog_hora_promd = prog_hora_promd;
        this.prog_nivel = prog_nivel;
        this.prog_puntaje_total = prog_puntaje_total;

        
    }
    //El constructor Crea una instancia Recursos
    
}