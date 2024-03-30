import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GestionMunicipiosService {
  urlBackend = 'http://localhost:8080';
  municipiosArr = [];
  constructor(private http: HttpClient) {}

  addMunicipio(municipio: any): Observable<any> {
    return this.http.post<any>(
      `${this.urlBackend}/municipio-controller/add-municipio`,
      {
        municipio: municipio,
      }
    );
  }
  getAllMunicipiosBackend(): Observable<any> {
    return this.http.get<any>(
      `${this.urlBackend}/municipio-controller/get-all-municipios`
    );
  }

  /**Get municipios from API */
  async getMunicipiosAPI(): Promise<any> {
    return fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json').then(
      (response) => response.json()
    );
  }
}
