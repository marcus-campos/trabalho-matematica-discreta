import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueTablePage } from './true-table.page';

describe('TrueTablePage', () => {
  let component: TrueTablePage;
  let fixture: ComponentFixture<TrueTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueTablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
