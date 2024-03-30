import { map } from 'rxjs';
import { ProductServiceService } from './services/productService/product-service.service';
import { Component, OnInit, Output } from '@angular/core';
import { EditarComponent } from './components/editar/editar.component';
import { MatDialog } from '@angular/material/dialog';
import { OutletContext } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  listadoProductos = [];

  listadoTabla = [];
  precioLista: any;
  @Output() busqueda;

  constructor(
    private productService: ProductServiceService,
    private matDialog: MatDialog
  ) {}

  async ngOnInit() {
    //await this.llenarListaProductos();
  }

  async llenarListaProductos() {
    this.productService.getAllProductos().subscribe({
      next: (data) => {
        this.listadoProductos = data.map((item: any) => {
          console.log(item);
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
      },
    });
  }

  actualizarListadoTabla(producto: any) {
    const cantidad = 1;

    let indice = this.listadoTabla.findIndex(
      (objeto) => objeto.id == producto.id && objeto.nombre == producto.nombre
    );
    if (indice != -1) {
      this.listadoTabla[indice].cantidad += 1;
    } else {
      const clone = { ...producto, cantidad: 1 };
      this.listadoTabla.push(clone);
    }
    console.log(this.listadoTabla);
    this.calcPrecioLista();
  }

  delete_producto_listado(producto) {
    this.listadoTabla = this.listadoTabla.filter(
      (prod) => prod.nombre !== producto.nombre
    );
    this.calcPrecioLista();
  }

  edit_producto_listado(producto: any) {
    var popUp = this.matDialog.open(EditarComponent, {
      width: '350px',
      data: {
        codigo: producto.codigo,
        nombre: producto.nombre,
        cantidad: producto.cantidad,
      },
    });
    popUp.afterClosed().subscribe((item) => {
      console.log(item);
      this.listadoTabla = this.listadoTabla.filter((prod) => {
        if (prod.nombre !== item.nombre) {
          return prod;
        } else {
          prod.cantidad = parseInt(item.cantidad);
          return prod;
        }
      });
      this.calcPrecioLista();
    });
  }
  calcPrecioLista() {
    this.precioLista = 0;
    this.listadoTabla.forEach((prod) => {
      this.precioLista += prod.cantidad * prod.precio;
    });
  }

  nuevaListaProductoBuscado(nombre: any) {
    this.productService.getProductoBuscado(nombre).subscribe({
      next: (data) => {
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
      },
    });
    //console.log(this.listadoProductos);
  }

  terminar(bool: any) {
    if (bool) {
      this.listadoTabla = [];
      this.precioLista = 0;
    }
  }
}
