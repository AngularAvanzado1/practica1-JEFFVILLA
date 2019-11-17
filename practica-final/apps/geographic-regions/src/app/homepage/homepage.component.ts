import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { RegionService } from '@practica-final/shared/data';

@Component({
  selector: 'practica-final-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
  public regions$;
  constructor(
    private dataRegionsService: RegionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.regions$ = this.dataRegionsService.getAllRegions();
  }

  regionSelect(id: string) {
    this.router.navigate(['/regions', id]);
  }
}
