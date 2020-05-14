import { Injectable } from '@angular/core';
import humanizeDuration, { HumanizerOptions } from 'humanize-duration';

@Injectable({
  providedIn: 'root'
})
export class NgxHumanizeDurationService {

  constructor() { }

  humanizeDuration(value: number, options: HumanizerOptions) {
    return humanizeDuration(value, options);
  }
}
