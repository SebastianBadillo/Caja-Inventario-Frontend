import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventarioServiceService {
  l;
  private unsuscribeRequest = new Subject<void>();
  urlBackend = 'http://localhost:8080/tienda';
  constructor(private http: HttpClient) {}

  /** Pedir al endPoint todo el listado de inventario */
  getAllInventario(): Observable<any> {
    return this.http.get(
      `${this.urlBackend}/inventario-controller/get-general-view`
    );
  }
  /** Pedir al endPoint el listado de inventario solicitado por el usuario*/
  getInventarioBuscado(nombre: String): Observable<any> {
    this.unsuscribeRequest.next();
    return this.http
      .get(
        `${this.urlBackend}/inventario-controller/get-general-view-by-nombre?nombre=${nombre}`
      )
      .pipe(takeUntil(this.unsuscribeRequest));
  }
}
