import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, delay, of, takeUntil } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProductServiceService {
  private unsuscribeRequest = new Subject<void>();
  urlBackend = 'http://localhost:8080/tienda';
  constructor(private http: HttpClient) {}
  /**Obtener todo el listado de productos */
  getAllProductos(): Observable<any> {
    return this.http.get(
      `${this.urlBackend}/producto-controller/get-all-productos`
    );
  }
  /**Obtener el listado de productos filtrado por el usuario */
  getProductoBuscado(nombre: any): Observable<any> {
    this.unsuscribeRequest.next();
    return this.http
      .get(
        `${this.urlBackend}/producto-controller/buscar-producto?nombre=${nombre}`
      )
      .pipe(takeUntil(this.unsuscribeRequest));
  }

  getInventarioEspecificoByNombre(nombre: any): Observable<any> {
    this.unsuscribeRequest.next();
    return this.http
      .get(
        `${this.urlBackend}/inventario-controller/get-especific-view-by-nombre?nombre=${nombre}`
      )
      .pipe(takeUntil(this.unsuscribeRequest));
  }

  updateInventory(cantidad: any, id: any): Observable<any> {
    return this.http.put(
      `${this.urlBackend}/inventario-controller/update-inventory?cantidad=${cantidad}&id=${id}`,
      null
    );
  }
}
