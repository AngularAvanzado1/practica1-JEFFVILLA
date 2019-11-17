import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionsCountrysComponent } from './regions-countrys/regions-countrys.component';
import { RegionsDetailsComponent } from './regions-details/regions-details.component';
import { MaterialModule } from '@practica-final/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
const routes: Routes = [{ path: '', component: RegionsComponent }];

@NgModule({
  declarations: [
    RegionsComponent,
    RegionsCountrysComponent,
    RegionsDetailsComponent
  ],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ScrollingModule
  ]
})
export class RegionsModule {}
