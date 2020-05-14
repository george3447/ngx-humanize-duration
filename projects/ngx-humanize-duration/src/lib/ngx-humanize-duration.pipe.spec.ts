import { TestBed, async } from '@angular/core/testing';

import { NgxHumanizeDurationPipe } from './ngx-humanize-duration.pipe';
import { NgxHumanizeDurationService } from './ngx-humanize-duration.service';

describe('NgxHumanizeDurationPipe', () => {

  let ngxHumanizeDurationService: NgxHumanizeDurationService;

  beforeEach(async (() => {

    TestBed.configureTestingModule({
      providers: [NgxHumanizeDurationService]
    });

    ngxHumanizeDurationService = TestBed.inject(NgxHumanizeDurationService);

  }));

  it('create an instance', () => {
    const pipe = new NgxHumanizeDurationPipe(ngxHumanizeDurationService);
    expect(pipe).toBeTruthy();
  });
});
