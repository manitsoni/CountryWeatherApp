import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCountryDataComponent } from './display-country-data.component';

describe('DisplayCountryDataComponent', () => {
  let component: DisplayCountryDataComponent;
  let fixture: ComponentFixture<DisplayCountryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCountryDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCountryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
