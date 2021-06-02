import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogTraductor } from 'src/app/models/traductor/logtraductor/log-traductor';
import { Traductor } from 'src/app/models/traductor/traductor/traductor';
import { LogTraductorService } from 'src/app/services/traductor/logtraductor/log-traductor.service';
import { TraductorService } from 'src/app/services/traductor/traductor/traductor.service';


@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

  translate: Traductor;
  traduccion: string;
  limpiarTexto: boolean;

  constructor(
    private traductorService: TraductorService,
    private logService: LogTraductorService,
    private router: Router
    ) { 
    this.translate = new Traductor();
    
  }

  ngOnInit(): void {
    this.limpiarTexto=false;
  }
  
  traducir():void{
    this.traductorService.traducir(this.translate).subscribe(
      (result) => {
        this.traduccion = result.outputs[0].output;
        this.agregarLog();   
      }, 
      (error)=>{
        alert("error en la peticion");
      }
    )
    this.limpiarTexto = true; 
  }

  public limpiar():void{
    if(this.limpiarTexto){
      this.translate.input = "";
      this.traduccion = "";
    }
      
    this.limpiarTexto = false;
  }

  agregarLog():void{
    let log = this.cargarLog();
    this.logService.agregarLog(log).subscribe(
      result=>{
        if(result.status == "1")
          alert("Se actualizado historial de traducciones");
        console.log(result);
      },
      error=>{
        alert(error.msg);
        console.log(error);
      }
    )
  }
  cargarLog():LogTraductor{
    let log = new LogTraductor();
    log.textoOrigen = this.translate.input;
    log.idiomaOrigen = this.formatearIdioma(this.translate.source);
    log.textoDestino = this.traduccion;
    log.idiomaDestino = this.formatearIdioma(this.translate.target);
    return log;
    
  }
  formatearIdioma(idioma:string):string{
    switch (idioma){
      case "es":{return "Spanish"; break};
      case "en":{return "English"; break};
      case "it":{return "Italian"; break};
      case "fr":{return "French"; break};
    }
    return "";
  }

  irHistorial():void{
    this.router.navigate(["traductor/historial"])
  }
}
