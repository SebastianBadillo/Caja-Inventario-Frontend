import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsServiceService {
  urlBackend = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  /**Obtener inventario por codigo */
  getInventarioEspecifico(codigo: number): Observable<any> {
    return this.http.get(
      `${this.urlBackend}/inventario-controller/get-especific-view?codigoStr=${codigo}`
    );
  }
  /**Actualizar inventario  */
  updateProdInv(data: any): Observable<any> {
    return this.http.post(
      `${this.urlBackend}/inventario-controller/update`,
      data
    );
  }

  /**Añadir un producto al listado de productos */
  addProducto(data: any): Observable<any> {
    return this.http.post(
      `${this.urlBackend}/producto-controller/add-product`,
      data
    );
  }

  /**Añadir un inventario al listado de inventario */
  addInventario(data: any): Observable<any> {
    return this.http.post(
      `${this.urlBackend}/inventario-controller/add-inventario`,
      data
    );
  }
}
