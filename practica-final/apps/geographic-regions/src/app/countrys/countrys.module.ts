import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CountrysRoutingModule } from './countrys-routing.module';
import { CountrysComponent } from './countrys.component';
import { MaterialModule } from '@practica-final/material';

const routes: Routes = [{ path: '', component: CountrysComponent }];

@NgModule({
  declarations: [CountrysComponent],
  imports: [
    CommonModule,
    CountrysRoutingModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class CountrysModule {}
