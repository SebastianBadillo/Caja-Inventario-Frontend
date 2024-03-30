import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // asegura que la redirección solo se realice si la URL coincide completamente con el path vacío ''
  },
  {
    path: 'gestion',
    loadChildren: () =>
      import('./gestion/gestion.module').then((m) => m.GestionModule),
  },
  {
    path: 'tienda',
    loadChildren: () =>
      import('./tienda/tienda.module').then((m) => m.TiendaModule),
  },
  {
    path: 'inventario',
    loadChildren: () =>
      import('./inventario/inventario.module').then((m) => m.InventarioModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
