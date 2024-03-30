import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';
import { fromEvent } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ProductServiceService } from '../../services/productService/product-service.service';

@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css'],
})
export class SelectProductComponent implements OnInit {
  @Input()
  listadoProductos: any;

  @Output()
  productoAgregar: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  productoBuscado: EventEmitter<any> = new EventEmitter<any>();

  listaCodigos = [];
  filteredOptions: Observable<any>;
  filteredOptions2: Observable<any>;
  producto: FormGroup;

  ngOnInit() {
    this.producto = new FormGroup({
      informacion: new FormControl(''),
    });

    this.producto.valueChanges.pipe(startWith('')).subscribe((value) => {
      this.productService
        .getProductoBuscado(value.informacion)
        .subscribe((data) => {
          this.listadoProductos = data.map((item: any) => {
            return {
              id: item.id,
              nombre: item.nombre,
              empresa: item.empresa,
              codigo: item.codigo,
              fechaVen: item.fechaVen,
              fechaIn: item.fechaIn,
              descripcion: item.descripcion,
              precio: item.precio,
            };
          });

          this.filteredOptions = of(this.listadoProductos);
        });
    });
  }
  constructor(private productService: ProductServiceService) {}
  send() {
    this.listadoProductos.filter((prod) => {
      if (prod.nombre == this.producto.value.informacion) {
        const clone = { ...prod };
        this.enviarProducto(clone);
        this.clean();
      }
    });
  }

  clean() {
    this.producto.reset();
  }

  enviarProducto(producto: any) {
    this.productoAgregar.emit(producto);
  }
}
