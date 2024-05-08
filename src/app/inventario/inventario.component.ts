import { Component, OnInit } from '@angular/core';
import { InventarioServiceService } from './services/inventario-service.service';
import { AgregarComponent } from './components/agregar/agregar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
  listaInvB = [];
  statusToEdit;
  constructor(
    private inventarioService: InventarioServiceService,
    public dialog: MatDialog
  ) {}
  /** Traer todo el listado del EndPoint y mapearlo en this.listadoInvB*/
  llenarListadoInventario() {
    this.inventarioService.getAllInventario().subscribe({
      next: (data) => {
        this.listaInvB = data.map((item: any) => {
          const [nombre, codigo, cantidad] = item;
          return {
            nombre: nombre,
            codigo: codigo,
            cantidad: cantidad,
          };
        });
      },
    });
  }

  ngOnInit() {
    this.llenarListadoInventario();
  }

  /**Se utiliza cuando en el filtro se manda la lista filtrada, aqui actualizamos */
  actualizarListaEvent(list: any) {
    this.listaInvB = list;
  }

  setEstado(status: Boolean) {
    this.statusToEdit = status;
  }

  openAddWindow(element: any) {
    const dialogRef = this.dialog.open(AgregarComponent);
  }
}
