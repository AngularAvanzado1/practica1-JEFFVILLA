import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsDetailsComponent } from './regions-details.component';

describe('RegionsDetailsComponent', () => {
  let component: RegionsDetailsComponent;
  let fixture: ComponentFixture<RegionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
