import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaRoutes } from './tienda.routing';

@NgModule({
  imports: [TiendaRoutes],
  exports: [RouterModule],
})
export class TiendaRoutingModule {}
