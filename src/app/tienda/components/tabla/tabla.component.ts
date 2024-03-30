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
  @Output()
  deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = [
    '#',
    // 'Código',
    'Nombre',
    'Cantidad',
    'Precio Unitario',
    'Opciones',
  ];

  @ViewChild('tabla') table: MatTable<any>;
  dataSource = new MatTableDataSource<any>();
  contador: number = 1;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<any>(this.listadoTabla);

    this.cdr.detectChanges();
    this.table.renderRows();
    if (changes['listadoTabla']) {
      this.dataSource = new MatTableDataSource<any>(this.listadoTabla);
      console.log(1);
      this.cdr.detectChanges();
      this.table.renderRows();
    }
  }

  eliminate(producto: any) {
    this.deleteEvent.emit(producto);
  }

  addData() {
    console.log(this.table);
    this.dataSource = new MatTableDataSource<any>(this.listadoTabla);
    this.table.renderRows();
  }

  edit(producto: any) {
    this.editEvent.emit(producto);
  }
}
