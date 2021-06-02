import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Noticia } from 'src/app/models/noticia/noticia';
import { NoticiaService } from 'src/app/services/noticia/noticia.service';

@Component({
  selector: 'app-homenoticias',
  templateUrl: './homenoticias.component.html',
  styleUrls: ['./homenoticias.component.css']
})
export class HomenoticiasComponent implements OnInit {

  noticias: Array<Noticia>;
  constructor(
    private noticiaService:NoticiaService,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.cargarNoticias();
  }

  cargarNoticias():void{
    this.noticias= new Array<Noticia>();
    this.noticiaService.getNoticias().subscribe(
      result=>{
        result.forEach(element => {
          let noti = new Noticia();
          Object.assign(noti, element);
          this.noticias.push(noti);
        
          
        })
      },
      error=>{
        console.log("Error al consultar noticias")
      }
    )
  }

  cambiarEstado(noticia:Noticia){
    noticia.vigente=!noticia.vigente;
    this.noticiaService.editNoticia(noticia).subscribe(
      result=>{
        this.toastr.success("Exitos al cambiar estado", "Editar Noticia");
        this.ngOnInit();
      },
      error=>{
        console.log(error);
        this.toastr.error("Ha ocurrido un error", "Editr Noticia Noticia");
      }
    )
  }
  eliminarNoticia(id:string){
    this.noticiaService.deleteNoticia(id).subscribe(
      result=>{
        this.toastr.success("Los datos fueron borrados con exito", "Borrar noticia");
        this.ngOnInit();
      },
      error=>{
        console.log(error);
        this.toastr.error("Ha ocurrido un error", "Eliminar Noticia");
      }
    )
  }

  verNoticiasActivas(){
    this.router.navigate(["noticia/noticias"]);
  }
}
