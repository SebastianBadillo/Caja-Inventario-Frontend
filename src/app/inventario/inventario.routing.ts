import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ProductDetailsComponent } from './components/ProductDetails/ProductDetails.component';

const routes: Routes = [
  {
    path: '',
    component: InventarioComponent,
  },
  {
    path: 'producto/:codigoProducto/:editing',
    component: ProductDetailsComponent,
  },
];
export const InventarioRoutes = RouterModule.forChild(routes);
