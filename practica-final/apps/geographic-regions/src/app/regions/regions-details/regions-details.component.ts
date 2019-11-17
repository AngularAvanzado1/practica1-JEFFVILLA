import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Region } from '@practica-final/shared/domain';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'regions-details',
  templateUrl: './regions-details.component.html',
  styleUrls: ['./regions-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsDetailsComponent implements OnInit {
  @Input() region: any;
  constructor() {}

  ngOnInit() {}
}
