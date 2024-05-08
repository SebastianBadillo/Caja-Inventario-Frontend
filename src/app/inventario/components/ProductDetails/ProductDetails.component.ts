import {
  ChangeDetectorRef,
  Component,
  Input,
  IterableDiffers,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsServiceService } from './service/ProductDetailsService.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';
@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css'],
})
export class ProductDetailsComponent implements OnChanges {
  /** [ ] para mapear la data del endpoint */
  listadoInventario = [];
  @Input() statusToEdit;
  productCodigo;
  /**Nombre del producto */
  titulo;
  /** Permiso para editar */
  editingStatus;
  /**Listado para la mat-table */
  dataSource = new MatTableDataSource<any>();
  /** [] de columnas y orden de las mismas en el mat-table */
  displayedColumns;

  @ViewChild(MatTable) table: MatTable<any>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductDetailsServiceService,
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<any>(this.listadoInventario);
    this.cdr.detectChanges();
    this.table.renderRows();
  }
  async obtenerInventarioEspecifico(codigo) {
    this.productService.getInventarioEspecifico(codigo).subscribe({
      next: (data) => {
        this.listadoInventario = data.map((item: any) => {
          const [
            cantidad,
            fechain,
            fechaven,
            lote,
            precio,
            nombre,
            codigo,
            inventarioId,
            productoId,
          ] = item;
          console.log(item);
          this.titulo = nombre;
          const fechaInTrunc = fechain.split('T')[0];
          const fechaVenTrunc = fechaven.split('T')[0];
          return {
            cantidad: cantidad,
            fechain: fechaInTrunc,
            fechaven: fechaVenTrunc,
            precio: precio,
            lote: lote,
            nombre: nombre,
            codigo: codigo,
            inventarioId: inventarioId,
            productoId: productoId,
          };
        });
        this.dataSource = new MatTableDataSource<any>(this.listadoInventario);
      },
    });
  }

  ngOnInit() {
    this.productCodigo = +this.route.snapshot.paramMap.get('codigoProducto'); // with the '+' I convert it into a number
    this.editingStatus = this.route.snapshot.paramMap.get('editing');
    this.editingStatus = this.editingStatus === 'true';
    console.log(this.editingStatus);
    console.log(typeof this.editingStatus);

    this.obtenerInventarioEspecifico(this.productCodigo);
    this.setDisplayedColumns();
  }

  openDialog(element: any) {
    console.log(element);

    const dialogRef = this.dialog.open(EditarComponent, {
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.productService.updateProdInv(result).subscribe({
        next: (data) => {
          this.obtenerInventarioEspecifico(result.codigo);
          this.cdr.detectChanges();
          this.table.renderRows();
          const newUrl = `/inventario/producto/${result.codigo}/true`;

          // Navega a la nueva URL
          this.router.navigateByUrl(newUrl);
        },
      });
    });
  }
  setDisplayedColumns() {
    this.displayedColumns = [
      '#',
      'Nombre',
      'Precio',
      'Cantidad',
      'Codigo',
      'Lote',
      'Fecha Llegada',
      'Fecha Vencimiento',
    ];
    if (this.editingStatus) {
      this.displayedColumns.push('Acciones');
      console.log(this.displayedColumns);
    }
  }
}
