import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnChanges {
  @Input() listadoTabla: any;
  @Input() precioLista: any;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = [
    '#',
    'Nombre',
    'Lote',
    'Cantidad',
    'Precio Unitario',
    'Opciones',
  ];

  @ViewChild('tabla') table: MatTable<any>;
  dataSource = new MatTableDataSource<any>();
  contador: number = 1;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    /* Forzar angular a revisar cambios y actualizar vistas */
    this.dataSource = new MatTableDataSource<any>(this.listadoTabla);
    this.cdr.detectChanges();
    this.table.renderRows();
  }

  /**Emitir el produco que se debe quitar de la lista */
  eliminate(producto: any) {
    this.deleteEvent.emit(producto);
  }
  /**Emitir el producto que debe ser editado */
  edit(producto: any) {
    this.editEvent.emit(producto);
  }
}
