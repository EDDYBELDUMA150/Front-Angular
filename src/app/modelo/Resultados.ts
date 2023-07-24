import { Time } from "@angular/common";

export class Resultados {
    id_resultado: number;
    re_fecha:Date;
    re_hora: Time;
    re_puntaje: number;
    

    Resultados(){}

    constructor(id_resultado: number, re_fecha: Date,re_hora:Time,re_puntaje:number ) {
        this.id_resultado = id_resultado;
        this.re_fecha = re_fecha;
        this.re_hora = re_hora;
        this.re_puntaje = re_puntaje;
        
    }
    //El constructor Crea una instancia Recursos
    
}