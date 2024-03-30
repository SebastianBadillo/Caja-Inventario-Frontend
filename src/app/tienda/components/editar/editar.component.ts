import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  productoEditado: any = {
    nombre: '',
    codigo: '',
    cantidad: '',
  };
  producto: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<EditarComponent>
  ) {}

  ngOnInit() {
    this.productoEditado = this.data;
  }
  closePopUp() {
    const clone = { ...this.productoEditado };
    this.ref.close(clone);
  }
}
