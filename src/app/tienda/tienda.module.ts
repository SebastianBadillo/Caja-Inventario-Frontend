import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './tienda.component';
import { TiendaRoutingModule } from './tienda-routing.module';

import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectProductComponent } from './components/select-product/select-product.component';
import { ProductServiceService } from './services/productService/product-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from './components/tabla/tabla.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarComponent } from './components/editar/editar.component';
import { FacturaComponent } from './components/factura/factura.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    TiendaRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
  ],
  declarations: [
    TiendaComponent,
    SelectProductComponent,
    TablaComponent,
    EditarComponent,
    FacturaComponent,
  ],
  providers: [ProductServiceService, TiendaComponent],
})
export class TiendaModule {}
