import { TestBed } from '@angular/core/testing';

import { DetachInvisibleService } from './detach-invisible.service';

describe('DetachInvisibleService', () => {
  let service: DetachInvisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetachInvisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
