import { Pipe, PipeTransform } from '@angular/core';

import { NgxHumanizeDurationService } from './ngx-humanize-duration.service';
import { HumanizerOptions } from 'humanize-duration';

@Pipe({
  name: 'humanizeDuration'
})
export class NgxHumanizeDurationPipe implements PipeTransform {

  constructor(private ngxHumanizeDurationService: NgxHumanizeDurationService) { }

  transform(value: number, options?: HumanizerOptions): unknown {
    return this.ngxHumanizeDurationService.humanizeDuration(value, options);
  }

}
