import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationMenuComponent } from './creation-menu.component';
import {AppService} from '../app.service';

describe('CreationMenuComponent', () => {
  let component: CreationMenuComponent;
  let fixture: ComponentFixture<CreationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationMenuComponent ],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
