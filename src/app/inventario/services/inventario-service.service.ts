import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventarioServiceService {
  urlBackend = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  getAllInventario(): Observable<any> {
    return this.http.get(
      `${this.urlBackend}/inventario-controller/get-all-inventario`
    );
  }
}
