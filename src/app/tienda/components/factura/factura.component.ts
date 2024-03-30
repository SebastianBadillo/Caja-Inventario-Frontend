import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  factura: any;
  @Input() precioLista: any;
  @Output() terminar: EventEmitter<any> = new EventEmitter<any>();
  vueltos: any;
  state = false;
  constructor() {}

  ngOnInit() {
    this.factura = new FormGroup({
      cliente: new FormControl(''),
      dinero: new FormControl(''),
    });
  }
  calcVueltos() {
    if (this.factura.value.dinero && this.precioLista) {
      this.vueltos = this.factura.value.dinero - this.precioLista;
      this.state = true;
    } else {
      this.vueltos = 0;
    }
  }
  terminate() {
    this.factura.reset();
    this.vueltos = 0;
    this.state = false;
    this.terminar.emit(true);
  }
}
