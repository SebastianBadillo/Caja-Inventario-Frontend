import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, delay, of, takeUntil } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProductServiceService {
  private unsuscribeRequest = new Subject<void>();
  urlBackend = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  getAllProductos(): Observable<any> {
    return this.http.get(
      `${this.urlBackend}/producto-controller/get-all-productos`
    );
  }
  getProductoBuscado(nombre: any): Observable<any> {
    this.unsuscribeRequest.next();
    return this.http
      .get(
        `${this.urlBackend}/producto-controller/buscar-producto?nombre=${nombre}`
      )
      .pipe(takeUntil(this.unsuscribeRequest));
  }
}
