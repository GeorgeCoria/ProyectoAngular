export class Traductor {
    _id:string;
    source:string;
    target:string;
    input:string;

    constructor(source?:string, target?:string, input?:string){
        this.source = source;
        this.target = target;
        this.input = input;
    }

}
