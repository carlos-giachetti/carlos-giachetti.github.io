/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Service2Component } from './service2.component';

describe('Service2Component', () => {
  let component: Service2Component;
  let fixture: ComponentFixture<Service2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
