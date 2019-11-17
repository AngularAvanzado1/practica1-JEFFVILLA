import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsCountrysComponent } from './regions-countrys.component';

describe('RegionsCountrysComponent', () => {
  let component: RegionsCountrysComponent;
  let fixture: ComponentFixture<RegionsCountrysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsCountrysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsCountrysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
