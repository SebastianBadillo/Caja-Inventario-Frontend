import { Component, OnInit } from '@angular/core';
import { InventarioServiceService } from './services/inventario-service.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
  listadoInventario = [];
  constructor(private inventarioService: InventarioServiceService) {}
  llenarListadoInventario() {
    this.inventarioService.getAllInventario().subscribe({
      next: (data) => {
        this.listadoInventario = data.map((item: any) => {
          return {
            idProducto: item.idProducto,
            cantidad: item.cantidad,
          };
        });
      },
    });
  }
  ngOnInit() {
    this.llenarListadoInventario();
  }
}
