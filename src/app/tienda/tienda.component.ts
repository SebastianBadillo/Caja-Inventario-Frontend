import { map } from 'rxjs';
import { ProductServiceService } from './services/product-service.service';
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

  constructor(
    private productService: ProductServiceService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {}

  /** Llenar listado */
  llenarListaProductos() {
    this.productService.getAllProductos().subscribe({
      next: (data) => {
        this.listadoProductos = data.map((item: any) => {
          console.log(item);
          return {
            id: item.id,
            nombre: item.nombre,
            empresa: item.empresa,
            codigo: item.codigo,
            descripcion: item.descripcion,
            precio: item.precio,
          };
        });
      },
    });
  }

  /**Actializar listado, y actualizar cantidades */
  actualizarListadoTabla(producto: any) {
    const seleccionado = 1;
    console.log(producto.cantidad);
    console.log(producto.lote);
    console.log(producto.inventario_id);
    let indice = this.listadoTabla.findIndex(
      (objeto) =>
        objeto.id == producto.id &&
        objeto.nombre == producto.nombre &&
        objeto.lote == producto.lote
    );

    if (indice != -1) {
      this.listadoTabla[indice].seleccionado += 1;
    } else {
      const clone = { ...producto, seleccionado: 1 };
      this.listadoTabla.push(clone);
      console.log(clone.seleccionado);
    }

    this.calcPrecioLista();
  }
  /** Eliminar el producto de la lista */
  delete_producto_listado(producto) {
    this.listadoTabla = this.listadoTabla.filter(
      (prod) => prod.nombre !== producto.nombre
    );
    this.calcPrecioLista();
  }

  /**Funcion para abrir el mat-Dialog */
  edit_producto_listado(producto: any) {
    var popUp = this.matDialog.open(EditarComponent, {
      width: '350px',
      data: {
        codigo: producto.codigo,
        nombre: producto.nombre,
        cantidad: producto.seleccionado,
      },
    });
    popUp.afterClosed().subscribe((item) => {
      console.log(item);
      this.listadoTabla = this.listadoTabla.filter((prod) => {
        if (prod.nombre !== item.nombre) {
          return prod;
        } else {
          prod.seleccionado = parseInt(item.cantidad);
          return prod;
        }
      });
      this.calcPrecioLista();
    });
  }
  /**Calcular el precio de la lista */
  calcPrecioLista() {
    this.precioLista = 0;
    this.listadoTabla.forEach((prod) => {
      this.precioLista += prod.seleccionado * prod.precio;
    });
  }

  /**Mapear respuesta del endPoint (lista filtrada) */
  nuevaListaProductoBuscado(nombre: any) {
    this.productService.getProductoBuscado(nombre).subscribe({
      next: (data) => {
        this.listadoProductos = data.map((item: any) => {
          return {
            id: item.id,
            nombre: item.nombre,
            empresa: item.empresa,
            codigo: item.codigo,
            descripcion: item.descripcion,
            precio: item.precio,
          };
        });
      },
    });
  }

  /**Resets */
  terminar(bool: any) {
    this.listadoTabla.forEach((element) => {
      const setCantidad = element.cantidad - element.seleccionado;
      this.productService
        .updateInventory(setCantidad, element.inventario_id)
        .subscribe();
    });
    if (bool) {
      this.listadoTabla = [];
      this.precioLista = 0;
    }
  }
}
