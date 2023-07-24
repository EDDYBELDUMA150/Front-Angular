import { Usuarios } from "./Usuarios";

export class Jugador {
    player_id: number;
    player_nombre:string;
    usuario:Usuarios;

    Jugador(){}

    constructor(player_id: number, player_nombre: string) {
        this.player_id = player_id;
        this.player_nombre = player_nombre;
        this.usuario= new Usuarios();
        
    }
    //El constructor Crea una instancia Recursos
    
}