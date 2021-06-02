import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from 'src/app/models/pasaje/pasaje/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  urlBase:string = "http://localhost:3000/api/pasaje/"
  constructor(
    private http:HttpClient
  ) { }

  getPasajes():Observable<any>{
    let options={
      headers: new HttpHeaders({ }),
      params: new HttpParams({})
    }
    return this.http.get(this.urlBase,options);
  }

  getPasajesByCategoria(categoria:string):Observable<any>{
    let options = {
      headers: new HttpHeaders({}),
      params: new HttpParams({})
    }
    return this.http.get(this.urlBase+"categoria/"+categoria,options);
  }

  savePasaje(pasaje:Pasaje):Observable<any>{
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({})
    }
    let body = JSON.stringify(pasaje);
    return this.http.post(this.urlBase, body, options);
  }

  deletePasaje(id:string):Observable<any>{
    let options = {
      headers: new HttpHeaders({}),
      params: new HttpParams({})
    }
    return this.http.delete(this.urlBase+id, options);
  }

  getPasaje(id:string):Observable<any>{
    let options = {
      headers: new HttpHeaders({}),
      params: new HttpParams({})
    }
    return this.http.get(this.urlBase+id, options);
  }
  updatePasaje(pasaje:Pasaje):Observable<any>{
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: ({
      })
    }
    let body = JSON.stringify(pasaje);
    return this.http.put(this.urlBase+pasaje._id, body, options);
  }
}
