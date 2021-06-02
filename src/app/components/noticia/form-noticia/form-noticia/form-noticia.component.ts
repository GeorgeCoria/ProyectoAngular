import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Noticia } from 'src/app/models/noticia/noticia';
import { NoticiaService } from 'src/app/services/noticia/noticia.service';

@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.css']
})
export class FormNoticiaComponent implements OnInit {

  noticia:Noticia;
  constructor(
    private noticiaService:NoticiaService,
    private router:Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.noticia = new Noticia();
    this.noticia.img = "";
    this.noticia.vigente = false;
  }

  onFileChanges(files){
    console.log("File has changed:", files);
    this.noticia.img = files[0].base64;
    }

  guardarNoticia(form:NgForm):void{
    this.noticiaService.saveNoticia(this.noticia).subscribe(
      result=>{
        if(result.status =="1")
         this.toastr.success("Registro exitoso", "Alta De Noticia")
        console.log(result);
        form.resetForm();
        this.noticia.img="";
      },
      error=>{
        console.log(error);
        this.toastr.error("Error al guardar noticia","Alta de Noticia")
      }
    )
  }

  verNoticias():void{
    this.router.navigate(["noticia/noticias"])
  }

   
}
