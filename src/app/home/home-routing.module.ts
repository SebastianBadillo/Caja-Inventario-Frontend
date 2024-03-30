import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [HomeRoutes],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
