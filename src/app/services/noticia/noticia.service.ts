import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/models/noticia/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  urlBase:string = "http://localhost:3000/api/noticia/";
  constructor(private http:HttpClient) { }

  getNoticias():Observable<any>{
    const options = {
      headers: new HttpHeaders({}),
      params: new HttpParams({})
    }
    return this.http.get(this.urlBase, options);
  }

  saveNoticia(noticia:Noticia):Observable<any>{
    let options = {
      headers:new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({})
    }
    let body = JSON.stringify(noticia);

    return this.http.post(this.urlBase,body,options);
  }

  deleteNoticia(id:string):Observable<any>{
    let options = {
      headers: new HttpHeaders({}),
      params: new HttpParams({})
    }
    return this.http.delete(this.urlBase+id, options);
  }

  editNoticia(noticia:Noticia){
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: ({
      })
    }
    let body = JSON.stringify(noticia);
    return this.http.put(this.urlBase+noticia._id, body, options);
  }

  getNoticiasActivas():Observable<any>{
    const options = {
      headers: new HttpHeaders({}),
      params: new HttpParams({})
    }
    return this.http.get(this.urlBase+"activos", options);
  }

}
