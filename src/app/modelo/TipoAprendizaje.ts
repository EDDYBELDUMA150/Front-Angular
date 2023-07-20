export class tipoAprendizaje{
    id_tipo_apren: number;
    tapr_nombre: String;
    tapr_progreso: number;
     
    tipoAprendizaje() {}


    constructor(id_tipo_apren: number, tapr_nombre: string, tapr_progreso: number) {
        this.id_tipo_apren = id_tipo_apren;
        this.tapr_nombre = tapr_nombre;
        this.tapr_progreso=tapr_progreso;
    }
    //Crea el constructor para realizar el crud
}