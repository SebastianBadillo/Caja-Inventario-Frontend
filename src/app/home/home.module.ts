import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [CommonModule, HomeRoutingModule, MatCardModule, MatIconModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
