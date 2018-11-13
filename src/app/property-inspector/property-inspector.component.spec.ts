import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInspectorComponent } from './property-inspector.component';
import {AppService} from '../app.service';
import {FormsModule} from '@angular/forms';
import {PropertyComponentComponent} from './property-component/property-component.component';

describe('PropertyInspectorComponent', () => {
  let component: PropertyInspectorComponent;
  let fixture: ComponentFixture<PropertyInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyInspectorComponent, PropertyComponentComponent ],
      providers: [AppService],
      imports: [FormsModule],
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
