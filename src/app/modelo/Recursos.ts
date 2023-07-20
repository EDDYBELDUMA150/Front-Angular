import { Actividad } from "./Actividad";

export class Recursos {
    id_recurso: number;
    rec_nombre:string;
    rec_enlaces?: string;
    rec_pdfs?: string;
    rec_imagenes?: string;

    Recursos(){}

    constructor(id_recurso: number, rec_nombre: string) {
        this.id_recurso = id_recurso;
        this.rec_nombre = rec_nombre;
        
    }
    //El constructor Crea una instancia Recursos
    
}

