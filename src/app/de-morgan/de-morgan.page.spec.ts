import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeMorganPage } from './de-morgan.page';

describe('DeMorganPage', () => {
  let component: DeMorganPage;
  let fixture: ComponentFixture<DeMorganPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeMorganPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeMorganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
