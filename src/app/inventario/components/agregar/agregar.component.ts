import { Observable, of, startWith } from 'rxjs';
import { ProductDetailsServiceService } from './../ProductDetails/service/ProductDetailsService.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductServiceService } from 'src/app/tienda/services/product-service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  inventario: FormGroup;
  producto: FormGroup;
  estado;
  option;
  listadoProductos;
  filteredOptions: Observable<any>;
  constructor(
    private productService: ProductDetailsServiceService,
    private ref: MatDialogRef<AgregarComponent>,
    private productTiendaService: ProductServiceService
  ) {}

  ngOnInit() {
    this.inventario = new FormGroup({
      cantidad: new FormControl(''),
      fechaIn: new FormControl(''),
      fechaVen: new FormControl(''),
      lote: new FormControl(''),
      idProducto: new FormControl(),
      nombreProducto: new FormControl(''),
    });
    this.producto = new FormGroup({
      codigo: new FormControl(''),
      precio: new FormControl(''),
      descripcion: new FormControl(''),
      empresa: new FormControl(''),
      nombre: new FormControl(''),
    });
    /** Estar al tanto de cambios en FormControl nombreProducto para hacer el llamado al endPoint y traer las opciones de producto*/
    this.inventario
      .get('nombreProducto')
      .valueChanges.pipe(startWith(''))
      .subscribe((value) => {
        console.log(value);
        this.productTiendaService
          .getProductoBuscado(value)
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
  /*Funcion usada para alternar entre el formulario de producto e inventario */
  onOptionChange() {
    this.estado = this.option === 'true';
  }
  /** Funcion para enviar el formGroup producto al endpoint y asi ser agregado */
  addProduct() {
    this.productService.addProducto(this.producto.value).subscribe({
      next: (data) => {},
    });
    this.producto.reset();
    this.ref.close();
  }
  /** Funcion para enviar el formGroup inventario al endpoint y asi ser agregado */
  addInventario() {
    this.productService.addInventario(this.inventario.value).subscribe({
      next: (data) => {},
    });
    this.producto.reset();
    this.ref.close();
  }
  /**Funcion que setea el idProduct del formGropu inventario cuando el usuario selecciona alguna opcion del mat-autocomplete */
  optionSelected(producto: any) {
    const objFiltered = this.listadoProductos.filter(
      (obj) => obj.nombre === producto.option.value
    );
    this.inventario.get('idProducto').setValue(objFiltered[0]?.id);
  }
}
