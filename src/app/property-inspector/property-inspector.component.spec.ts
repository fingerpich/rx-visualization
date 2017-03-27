import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInspectorComponent } from './property-inspector.component';

describe('PropertyInspectorComponent', () => {
  let component: PropertyInspectorComponent;
  let fixture: ComponentFixture<PropertyInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyInspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
