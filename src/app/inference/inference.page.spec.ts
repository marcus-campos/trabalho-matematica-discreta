import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InferencePage } from './inference.page';

describe('InferencePage', () => {
  let component: InferencePage;
  let fixture: ComponentFixture<InferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InferencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
