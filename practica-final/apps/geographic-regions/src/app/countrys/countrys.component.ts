import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '@practica-final/shared/data';

@Component({
  selector: 'practica-final-countrys',
  templateUrl: './countrys.component.html',
  styleUrls: ['./countrys.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrysComponent implements OnInit {
  id;
  country$;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.country$ = this.countryService.getCountry(this.id);
  }
}
