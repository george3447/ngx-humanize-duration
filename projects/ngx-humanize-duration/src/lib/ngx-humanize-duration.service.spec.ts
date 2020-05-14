import { TestBed } from '@angular/core/testing';

import { NgxHumanizeDurationService } from './ngx-humanize-duration.service';

describe('NgxHumanizeDurationService', () => {
  let service: NgxHumanizeDurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHumanizeDurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
