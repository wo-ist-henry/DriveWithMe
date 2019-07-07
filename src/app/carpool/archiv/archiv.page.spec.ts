import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivPage } from './archiv.page';

describe('ArchivPage', () => {
  let component: ArchivPage;
  let fixture: ComponentFixture<ArchivPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
