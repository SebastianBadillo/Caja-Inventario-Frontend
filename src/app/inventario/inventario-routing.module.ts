import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventarioRoutes } from './inventario.routing';

@NgModule({
  imports: [InventarioRoutes],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
