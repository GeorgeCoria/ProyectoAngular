import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogTraductor } from 'src/app/models/traductor/logtraductor/log-traductor';

@Injectable({
  providedIn: 'root'
})
export class LogTraductorService {

  urlBase:string = "http://localhost:3000/api/logTraductor/";
  constructor(private http:HttpClient) {

   }

   agregarLog(log:LogTraductor):Observable<any>{
     let option = {
       headers: new HttpHeaders({
        "Content-Type": "application/json"
       }),
       params: new HttpParams({
       })
     };

     let body = JSON.stringify(log);

     return this.http.post(this.urlBase, body, option);
   }

   showsLogs(idiomaOrigen:string, idiomaDestino:string):Observable<any>{
     let option = {
       headers: new HttpHeaders({}),
       params: new HttpParams({})
     }
     if(idiomaOrigen!="Seleccionar"&&idiomaDestino!="Seleccionar")
      return this.http.get(this.urlBase+"idioma/"+idiomaOrigen+"/"+idiomaDestino, option);
     else if(idiomaOrigen=="Seleccionar"&&idiomaDestino!="Seleccionar")
      return this.http.get(this.urlBase, option);
     else if(idiomaOrigen!="Seleccionar"&&idiomaDestino=="Seleccionar")
      return this.http.get(this.urlBase+"idioma/"+idiomaOrigen, option);
     else
      return this.http.get(this.urlBase, option);
   }
}
