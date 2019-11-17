import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountrysComponent } from './countrys.component';

const routes: Routes = [{ path: '', component: CountrysComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountrysRoutingModule { }
