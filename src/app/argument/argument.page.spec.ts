import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentPage } from './argument.page';

describe('ArgumentPage', () => {
  let component: ArgumentPage;
  let fixture: ComponentFixture<ArgumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgumentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
