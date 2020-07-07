import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DronPlannerComponent } from './dron-planner.component';

describe('DronPlannerComponent', () => {
  let component: DronPlannerComponent;
  let fixture: ComponentFixture<DronPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DronPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DronPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
