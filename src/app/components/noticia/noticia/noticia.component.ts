import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia/noticia';
import { NoticiaService } from 'src/app/services/noticia/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticias:Array<Noticia>;
  noticia:Noticia;
  posicion:number;
  constructor(
    private noticiaService:NoticiaService,
    private router:Router
  ) { 
  
  }

  ngOnInit(): void {
    this.cargarNoticiasActivas();  
  }

  cargarNoticiasActivas():void{
    this.noticias= new Array<Noticia>();
    this.noticiaService.getNoticiasActivas().subscribe(
      result=>{
        result.forEach(element => {
          let noti = new Noticia();
          Object.assign(noti, element);
          this.noticias.push(noti);
          console.log("posicion 0-->"+this.noticias[0].img);
          
        })
        this.posicion= 0;
        this.noticia = this.noticias[this.posicion];
      },
      error=>{
        console.log("Error al consultar noticias")
      }
    )
  }
  anterior():void{
    if(this.posicion == 0){
      this.posicion= this.noticias.length-1;
    }else{
      this.posicion--;
    }
    this.noticia= this.noticias[this.posicion];
  }
  siguiente():void{
    if(this.posicion == this.noticias.length -1){
      this.posicion = 0;

    }else{
      this.posicion++;
    }
    this.noticia=this.noticias[this.posicion];
  }

  volver():void{
    this.router.navigate(["noticia/home"])
  }
}
