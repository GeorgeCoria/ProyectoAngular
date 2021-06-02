export class LogTraductor {
    _id:string;
    textoOrigen : String;
    idiomaOrigen: string;
    textoDestino: string;
    idiomaDestino: string;

    constructor(
        textoOrigen?:string,
        idiomaOrigen?:string,
        textoDestino?:string,
        idiomaDestino?:string
    ){
        this.textoOrigen = textoOrigen;
        this.idiomaOrigen = idiomaOrigen;
        this.textoDestino = textoDestino;
        this.idiomaDestino = idiomaDestino;
    }
}
