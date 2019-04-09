import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSinglePage } from './store-single.page';

describe('StoreSinglePage', () => {
  let component: StoreSinglePage;
  let fixture: ComponentFixture<StoreSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSinglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
