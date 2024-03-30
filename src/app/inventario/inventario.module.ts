import { InventarioServiceService } from './services/inventario-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    InventarioRoutingModule,
    MatTableModule,
    MatIconModule,
  ],
  declarations: [InventarioComponent, TableComponent],
  providers: [InventarioServiceService],
})
export class InventarioModule {}
