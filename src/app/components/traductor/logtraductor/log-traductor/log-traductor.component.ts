import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogTraductor } from 'src/app/models/traductor/logtraductor/log-traductor';
import { LogTraductorService } from 'src/app/services/traductor/logtraductor/log-traductor.service';

@Component({
  selector: 'app-log-traductor',
  templateUrl: './log-traductor.component.html',
  styleUrls: ['./log-traductor.component.css']
})
export class LogTraductorComponent implements OnInit {
  logs:Array<LogTraductor>;
  idiomaOrigen:string;
  idiomaDestino:string;
  constructor(
    private logService: LogTraductorService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.idiomaOrigen="Seleccionar";
    this.idiomaDestino="Seleccionar";
    this.cargarLogs();
   
  }

  cargarLogs():void{
    this.logs = new Array<LogTraductor>();
    this.logService.showsLogs(this.idiomaOrigen,this.idiomaDestino).subscribe(
      result=>{
        result.forEach(element => {
          let log = new LogTraductor();
          Object.assign(log,element);
          this.logs.push(log);
          console.log(element)
        });
        
      },
      error=>{
        alert("Error al obtener registro de historial");
        console.log(error);
      }
    )
  }

  volver(){
    this.router.navigate(["traductor"]);
  }
 

}
