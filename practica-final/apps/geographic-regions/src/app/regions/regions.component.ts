import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Region, Country } from '@practica-final/shared/domain';
import { Observable } from 'rxjs';
import { RegionService } from '@practica-final/shared/data';
import { Router, ActivatedRoute } from '@angular/router';
import { startWith, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'practica-final-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent implements OnInit {
  region$: Observable<Region>;
  countrys$: Observable<Country[]>;
  id;
  constructor(
    private dataRegionsService: RegionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.region$ = this.dataRegionsService.getRegion(this.id);
      this.countrys$ = this.dataRegionsService.getCountryInRegion(this.id);
    }
  }
}
