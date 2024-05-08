import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, startWith, map, of } from 'rxjs';
import { InventarioServiceService } from '../../services/inventario-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  producto: FormGroup;
  /** sendList es un eventEmitter  */
  @Output() sendList = new EventEmitter<any>();
  /** EventEmitter para mandar la señal para desplegar el inventareado completo */
  @Output() LlamadoListaCompleta = new EventEmitter<any>();
  /**lista del inventariado que cumple con el filtro del usuario */
  listadoInv = [];
  /** Filtro para el mat-autocomplete */
  filteredOptions: Observable<any>;
  constructor(private inventarioService: InventarioServiceService) {}

  ngOnInit() {
    this.producto = new FormGroup({
      informacion: new FormControl(''),
    });
    /**Estar al tanto de cambios en el formControl informacion */
    this.producto.valueChanges.pipe(startWith('')).subscribe((value) => {
      /** Traer el listado de inventario especifico */
      this.inventarioService
        .getInventarioBuscado(value.informacion)
        .subscribe((data) => {
          this.listadoInv = data.map((item: any) => {
            /**Mapear el item */
            const [nombre, codigo, cantidad] = item;
            return {
              nombre: nombre,
              codigo: codigo,
              cantidad: cantidad,
            };
          });
          this.filteredOptions = of(this.listadoInv);
        });
    });
  }
  /**Emitir el listado de inventario */
  send() {
    this.sendList.emit(this.listadoInv);
    this.clean();
  }
  /**Emitir señal al componente padre */
  all() {
    this.LlamadoListaCompleta.emit(true);
  }
  /**Limpiar el formGrop */
  clean() {
    this.producto.reset();
  }
}
