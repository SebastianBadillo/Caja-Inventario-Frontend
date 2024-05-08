import { InventarioServiceService } from './services/inventario-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailsComponent } from './components/ProductDetails/ProductDetails.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarComponent } from './components/editar/editar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { MatRadioModule } from '@angular/material/radio';
import { ProductServiceService } from '../tienda/services/productService/product-service.service';

@NgModule({
  imports: [
    CommonModule,
    InventarioRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule,
  ],
  declarations: [
    InventarioComponent,
    TableComponent,
    ProductDetailsComponent,
    FilterComponent,
    EditarComponent,
    AgregarComponent,
  ],
  providers: [InventarioServiceService, ProductServiceService],
})
export class InventarioModule {}
