import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario.component';

const routes: Routes = [
  {
    path: '',
    component: InventarioComponent,
  },
];
export const InventarioRoutes = RouterModule.forChild(routes);
