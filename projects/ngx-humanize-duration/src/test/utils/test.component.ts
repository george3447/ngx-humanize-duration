import { Component, OnInit, Input } from '@angular/core';
import { NgxHumanizeDurationOptions } from '../../lib/ngx-humanize-duration.types';

@Component({
  selector: 'lib-ngx-humanize-duration',
  template: `
    <p class="normal">
      {{ yearInMillieSeconds | humanizeDuration:{ delimiter: ' and ', largest: 2 } }}
    </p>
    <p class="normal-without-option">
      {{ yearInMillieSeconds | humanizeDuration }}
    </p>
    <p class="normal-dynamic-options">
      {{ yearInMillieSeconds | humanizeDuration:humanizeDurationOptions }}
    </p>
    <p class="dynamic">
      {{ millieSeconds | humanizeDuration:options }}
    </p>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {

  yearInMillieSeconds = 1000;

  humanizeDurationOptions: NgxHumanizeDurationOptions = { delimiter: ' and ', largest: 2 };

  @Input() millieSeconds = 5000;

  @Input() options: NgxHumanizeDurationOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
