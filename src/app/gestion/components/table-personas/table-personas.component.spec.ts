/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TablePersonasComponent } from './table-personas.component';

describe('TablePersonasComponent', () => {
  let component: TablePersonasComponent;
  let fixture: ComponentFixture<TablePersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
