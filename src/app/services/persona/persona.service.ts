import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/pasaje/persona/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  urlBase:string = "http://localhost:3000/api/persona/";
  constructor(
    private http: HttpClient
  ) { }

  getPersonaByDni(dni:string):Observable<any>{
    let options = {
      headers: new HttpHeaders({}),
      params: new HttpParams({})
    }
    return this.http.get(this.urlBase+"dni/"+dni,options);
  }

  savePersona(persona:Persona):Observable<any>{
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({})
    }
    let body = JSON.stringify(persona);
    return this.http.post(this.urlBase, body, options);
  }
}
