import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@practica-final/layout';
import { MaterialModule } from '@practica-final/material';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'homepage',
          pathMatch: 'full'
        },
        {
          path: 'regions/:id',
          loadChildren: () =>
            import('./regions/regions.module').then(m => m.RegionsModule)
        },
        {
          path: 'regions',
          loadChildren: () =>
            import('./regions/regions.module').then(m => m.RegionsModule)
        },
        {
          path: 'countrys/:id',
          loadChildren: () =>
            import('./countrys/countrys.module').then(m => m.CountrysModule)
        },
        {
          path: 'homepage',
          loadChildren: () =>
            import('./homepage/homepage.module').then(m => m.HomepageModule)
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
