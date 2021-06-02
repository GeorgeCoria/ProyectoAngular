import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje/pasaje/pasaje';
import { Persona } from 'src/app/models/pasaje/persona/persona';
import { PasajeService } from 'src/app/services/pasaje/pasaje.service';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-pasaje',
  templateUrl: './form-pasaje.component.html',
  styleUrls: ['./form-pasaje.component.css']
})
export class FormPasajeComponent implements OnInit {

  pasaje:Pasaje;
  persona:Persona;
  existePersona:Boolean;
  mostrarForm:Boolean;
  dniAux:string;
  editMode:Boolean;
  fechaAux:Date;
  precio:number;
  constructor(
    private pasajeService: PasajeService,
    private personaService:PersonaService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.pasaje=new Pasaje();
    this.persona = new Persona();
    this.determinarAccion();
    
    
  }
 determinarAccion():void{
  this.activatedRoute.params.subscribe(
    params => {
      if (params.id == "0"){
        this.editMode=false;
        this.pasaje= new Pasaje();
        this.persona = new Persona();
        this.existePersona= false;
        this.mostrarForm = false;
        

      }else{
        this.editMode=true;
        this.cargarFormulario(params.id);
  
      }
    });
 }
  cargarFormulario(id:string):void{
    this.pasajeService.getPasaje(id).subscribe(
      result=>{
        this.pasaje=new Pasaje();
        Object.assign(this.pasaje,result);
        console.log(result);
        console.log(this.pasaje)
        this.persona = this.pasaje.pasajero;
        this.existePersona= true;
        this.mostrarForm = true;
      }
    )
  }
  volver():void{
    this.router.navigate(["pasajes"])
  }
  guardarPasaje():void{
    this.pasaje.pasajero = this.persona;
    this.pasajeService.savePasaje(this.pasaje).subscribe(
      result=>{
        if(result.status=="1")
          this.toastr.success("Registro exitoso", "Alta de Pasaje");
          this.volver();
      },
      error=>{
        this.toastr.error("Problemas al guardar pasaje", "Alta de Pasaje");
        console.log(error);
      }
    )
  }
  buscarPersona():void{
    this.limpiarCampos();
    this.personaService.getPersonaByDni(this.persona.nro_documento).subscribe(
      result=>{
        this.mostrarForm=true;
        if(result!=""){
          Object.assign(this.persona, result[0]);
          this.existePersona=true
        }else{
            this.existePersona=false;
        }
      },
      error=>{
        console.log(error);
      }
    )
  }
 
 limpiarCampos():void{
   this.persona.nombre="";
   this.persona.apellido="";
   this.persona.email="";
 }

 guardarPersona():void{
   this.dniAux=this.persona.nro_documento;
   this.personaService.savePersona(this.persona).subscribe(
     result=>{
        if(result.status=="1")
          this.toastr.success("Registro exitoso", "Alta de Pasajero");
          console.log(result);
        // se hace la carga nuevamente el formularios, esta vez la persona existe en la bd
          this.personaService.getPersonaByDni(this.persona.nro_documento).subscribe(
            result=>{
                Object.assign(this.persona, result[0]);
                this.existePersona=true}
          )
     },
     error=>{
       this.toastr.error("Error al intentar guardar pasajero", "Alta Pasajero");
      console.log(error);
     }
   )
 }
 actualizarPasaje():void{
   this.pasajeService.updatePasaje(this.pasaje).subscribe(
     result=>{
      this.toastr.success("Los datos fueron actualizados correctamento", "Update Pasaje")
      console.log(result);
      this.volver();
     },
     error=>{
      this.toastr.error("Error al guardar cambios", "Update Pasaje");
      console.log(error);
     }
   )
 }
 calcularPrecio():void{
  if(this.pasaje.categoriaPasajero =="Menor")
    this.pasaje.precioPasaje= this.precio -(this.precio * 0.25);
  else if ( this.pasaje.categoriaPasajero == "Jubilado")
    this.pasaje.precioPasaje = this.precio -(this.precio * 0.5);
  else
    this.pasaje.precioPasaje= this.precio;
 }

}
