import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyComponentComponent } from './property-component.component';
import {PropertyType} from '../../node-types/property-type';
import {AppService} from '../../app.service';
import {FormsModule} from '@angular/forms';

describe('PropertyComponentComponent', () => {
  let component: PropertyComponentComponent;
  let fixture: ComponentFixture<PropertyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyComponentComponent ],
      providers: [AppService],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyComponentComponent);
    component = fixture.componentInstance;
    component.properties = {propName: 'properyValue'};
    component.propertyType = new PropertyType('propName', 'string', null,'it could do alot');
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
