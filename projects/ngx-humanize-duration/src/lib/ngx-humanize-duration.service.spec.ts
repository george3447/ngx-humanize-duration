import { TestBed } from '@angular/core/testing';

import { NgxHumanizeDurationService } from './ngx-humanize-duration.service';
import { NgxHumanizeDurationModule } from './ngx-humanize-duration.module';

describe('NgxHumanizeDurationService', () => {
  let service: NgxHumanizeDurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHumanizeDurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created when no config provided', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({ imports: [NgxHumanizeDurationModule.forRoot()] });
    service = TestBed.inject(NgxHumanizeDurationService);
    expect(service).toBeTruthy();
  });
});
