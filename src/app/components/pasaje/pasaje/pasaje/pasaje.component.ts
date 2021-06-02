import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Pasaje } from 'src/app/models/pasaje/pasaje/pasaje';
import { PasajeService } from 'src/app/services/pasaje/pasaje.service';

@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css']
})
export class PasajeComponent implements OnInit {
  pasajes:Array<Pasaje>;
  categoria:string;

  constructor(
    private pasajeService: PasajeService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.cargarPasajes();
  }

  cargarPasajes():void{
    this.pasajes = new Array<Pasaje>();
    this.pasajeService.getPasajes().subscribe(
      result=>{
        result.forEach(element => {
          let pasaje = new Pasaje();
          Object.assign(pasaje,element);
          this.pasajes.push(pasaje);
        });
      },
      error=>{
        console.log(error);
      }
    )
  }
  cargarPasajesByCategoria():void{
    this.pasajeService.getPasajesByCategoria(this.categoria).subscribe(
      result=>{
        this.pasajes = new Array<Pasaje>();
        result.forEach(element => {
          let pasaje = new Pasaje();
          Object.assign(pasaje, element);
          this.pasajes.push(pasaje);
        });
      },
      error=>{
        console.log(error)
      }
    )
  }

  agregarPasaje():void{
    this.router.navigate(["pasajes/form-pasajes/",0]);
  }
  editarPasaje(pasaje:Pasaje):void{
    this.router.navigate(["pasajes/form-pasajes",pasaje._id]);
  }
  eliminarPasaje(id:string):void{
    this.pasajeService.deletePasaje(id).subscribe(
      result=>{
        if(result.status=="1")
          this.toastr.info("Operacion exitosa", "Eliminar Pasaje");
          console.log(result);
          this.ngOnInit();
      },
      error=>{
        this.toastr.error("No es posible eliminar Pasaje", "Eliminar Pasaje")
        console.log(error);
      }
    )
  }

 
}
