import { Pipe, PipeTransform } from '@angular/core';

import { NgxHumanizeDurationService } from './ngx-humanize-duration.service';
import { NgxHumanizeDurationOptions } from './ngx-humanize-duration.types';

@Pipe({
  name: 'humanizeDuration'
})
export class NgxHumanizeDurationPipe implements PipeTransform {

  constructor(private ngxHumanizeDurationService: NgxHumanizeDurationService) { }

  transform(value: number, options?: NgxHumanizeDurationOptions): string {
    return this.ngxHumanizeDurationService.humanizeDuration(value, options);
  }

}
