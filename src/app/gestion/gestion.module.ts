import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionComponent } from './gestion.component';
import { GestionRoutingModule } from './gestion-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePersonasComponent } from './components/table-personas/table-personas.component';

@NgModule({
  imports: [CommonModule, GestionRoutingModule, ReactiveFormsModule],
  declarations: [GestionComponent, SignInComponent, TablePersonasComponent],
})
export class GestionModule {}
