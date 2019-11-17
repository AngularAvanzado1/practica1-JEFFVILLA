import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Country } from '@practica-final/shared/domain';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'regions-countrys',
  templateUrl: './regions-countrys.component.html',
  styleUrls: ['./regions-countrys.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsCountrysComponent implements OnInit {
  @Input() countrys: Country[];
  constructor() {}

  ngOnInit() {}
}
