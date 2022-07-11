import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CnaeService {

  cnaeUrl = 'https://servicodados.ibge.gov.br/api/v2/cnae/secoes'

  

  constructor(private http: HttpClient) { }

  getSecao() {    
    return this.http.get(this.cnaeUrl)
  }
}
