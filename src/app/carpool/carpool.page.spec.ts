import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolPage } from './carpool.page';

describe('CarpoolPage', () => {
  let component: CarpoolPage;
  let fixture: ComponentFixture<CarpoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
