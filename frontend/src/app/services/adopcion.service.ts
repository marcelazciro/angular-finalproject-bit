import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adopcion } from '../models/adopcion';


@Injectable({
  providedIn: 'root'
})
export class AdopcionService {
  url = 'http://localhost:4200/api/adopciones/';

  constructor(private http: HttpClient) { }
  
  getAdopciones (): Observable<any> {
    return this.http.get(this.url);
  }
  eliminarAdopcion (id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  guardarAdopcion (adopcion:Adopcion): Observable<any> {
    return this.http.post(this.url, adopcion);
  }
  obtenerAdopcion (id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}

