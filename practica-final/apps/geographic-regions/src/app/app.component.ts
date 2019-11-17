import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RegionService } from '@practica-final/shared/data';
import { Router } from '@angular/router';
@Component({
  selector: 'practica-final-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'geographic-regions';
  constructor() {}

  ngOnInit() {}
}
