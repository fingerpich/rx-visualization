import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSceneComponent } from './control-scene.component';

describe('ControlSceneComponent', () => {
  let component: ControlSceneComponent;
  let fixture: ComponentFixture<ControlSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
