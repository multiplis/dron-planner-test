import { TestBed } from '@angular/core/testing';

import { DronPlannerService } from './dron-planner.service';

describe('DronPlannerService', () => {
  let service: DronPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DronPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
