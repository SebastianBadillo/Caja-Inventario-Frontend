import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from './gestion.component';

const routes: Routes = [
  {
    path: '',
    component: GestionComponent,
  },
  ,
];

export const MyRouteRoutes = RouterModule.forChild(routes);
