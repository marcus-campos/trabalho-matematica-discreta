import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueTableIframePage } from './true-table-iframe.page';

describe('TrueTableIframePage', () => {
  let component: TrueTableIframePage;
  let fixture: ComponentFixture<TrueTableIframePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueTableIframePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueTableIframePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
