import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cadem } from '../models/cadem';

@Injectable({
  providedIn: 'root'
})
export class CademService {

  baseUrl = environment.baseUrl;  

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cadem[]>{
    return this.http.get<Cadem[]>(this.baseUrl + '/vizualizacaolista');
  }

  findById(id: any): Observable<Cadem>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cadem>(url)
  }

  create(Cadem: Cadem): Observable<Cadem>{
    return this.http.post<Cadem>(this.baseUrl, Cadem);
  }

  update(Cadem: Cadem): Observable<Cadem>{
    const url = `${this.baseUrl}/${Cadem.id}`
    return this.http.put<Cadem>(url, Cadem)
  }

  delete(id: any): Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }
}
