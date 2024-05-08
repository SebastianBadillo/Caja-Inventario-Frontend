import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {
  dataSource = new MatTableDataSource<any>();
  @Input() listadoInventario;

  @Output() EditEmit = new EventEmitter<any>();
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    /**On changes re define datasource  */
    this.dataSource = new MatTableDataSource<any>(this.listadoInventario);
    /** forzar a Angular a que evalue y aplique cambios de vista */
    this.cdr.detectChanges();
    this.table.renderRows();
  }

  ngOnInit() {}
  displayedColumns: string[] = [
    '#',
    'idProducto',
    'Nombre',
    'Cantidad',
    'Opciones',
  ];

  @ViewChild('table') table: MatTable<any>;

  /** Navegar a la pagina del producto */
  navigateToProductDetail(productCodigo: number, status: Boolean) {
    this.router.navigate(['inventario/producto/', productCodigo, status]);
  }
}
