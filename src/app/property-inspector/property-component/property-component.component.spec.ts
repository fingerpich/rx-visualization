import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyComponentComponent } from './property-component.component';

describe('PropertyComponentComponent', () => {
  let component: PropertyComponentComponent;
  let fixture: ComponentFixture<PropertyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
