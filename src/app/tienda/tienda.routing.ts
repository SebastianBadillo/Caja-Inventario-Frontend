import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda.component';

const routes: Routes = [
  {
    path: '',
    component: TiendaComponent,
  },
];

export const TiendaRoutes = RouterModule.forChild(routes);
