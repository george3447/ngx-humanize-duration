import { Injectable, Optional, Inject } from '@angular/core';
import { Humanizer, humanizer } from 'humanize-duration';

import { NgxHumanizerOptions, NgxHumanizeDurationOptions, NGX_HUMANIZER_CONFIG } from './ngx-humanize-duration.types';

@Injectable({
  providedIn: 'root'
})
export class NgxHumanizeDurationService {

  private ngxHumanizeDuration: Humanizer;

  constructor(@Optional() @Inject(NGX_HUMANIZER_CONFIG) config: NgxHumanizerOptions = {}) {
    this.ngxHumanizeDuration = humanizer(config);
  }

  humanizeDuration(value: number, options: NgxHumanizeDurationOptions): string {
    return this.ngxHumanizeDuration(value, options);
  }
}
