import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsPage } from './propositions.page';

describe('PropositionsPage', () => {
  let component: PropositionsPage;
  let fixture: ComponentFixture<PropositionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
