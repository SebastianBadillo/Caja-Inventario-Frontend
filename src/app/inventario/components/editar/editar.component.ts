import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  inventario: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<EditarComponent>
  ) {
    console.log(this.data);
  }

  ngOnInit() {
    this.inventario = new FormGroup({
      cantidad: new FormControl(this.data.cantidad),
      fechain: new FormControl(this.data.fechain),
      fechaven: new FormControl(this.data.fechaven),
      lote: new FormControl(this.data.lote),
      nombre: new FormControl(this.data.nombre),
      codigo: new FormControl(this.data.codigo),
      inventarioId: new FormControl(this.data.inventarioId),
      productoId: new FormControl(this.data.productoId),
      precio: new FormControl(this.data.precio),
    });
  }
  closePopUp() {
    console.log(this.inventario);
    console.log(this.inventario.value);
    this.ref.close(this.inventario.value);
  }
}
