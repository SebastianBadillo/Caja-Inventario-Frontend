import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  @Input() listadoInventario;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<any>(this.listadoInventario);
    this.cdr.detectChanges();
    this.table.renderRows();
  }

  ngOnInit() {}
  displayedColumns: string[] = ['idProducto', 'Cantidad'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatTable) table: MatTable<any>;
}
