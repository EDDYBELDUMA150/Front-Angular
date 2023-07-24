export class ProgresoAprendizaje {
    id_prograpre: number;
    progapr_nombre:string;
    progapr_punntaje_aprendizaje:number;

   

    ProgresoAprendizaje(){}

    constructor(id_prograpre: number, progapr_nombre: string,progapr_punntaje_aprendizaje:number) {
        this.id_prograpre = id_prograpre;
        this.progapr_nombre = progapr_nombre;
        this.progapr_punntaje_aprendizaje = progapr_punntaje_aprendizaje;
    }
    //El constructor Crea una instancia Recursos
    
}