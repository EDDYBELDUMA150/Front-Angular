export class tipoAprendizaje{
    id_tipo_apren: number;
    tapr_nombre: string="";
    tapr_progreso: number;
    tapr_cantidad: number=0; 
   
   
    tipoAprendizaje() {

    }


    constructor(id_tipo_apren: number, tapr_nombre: string, tapr_progreso: number, tapr_cantidad: number) {
        this.id_tipo_apren = id_tipo_apren;
        this.tapr_nombre = tapr_nombre;
        this.tapr_progreso=tapr_progreso;
        this.tapr_cantidad=tapr_cantidad;
    }
    //Crea el constructor para realizar el crud
}