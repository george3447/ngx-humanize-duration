import { Component, OnInit, Input } from '@angular/core';
import { HumanizerOptions } from 'humanize-duration';

@Component({
  selector: 'lib-ngx-humanize-duration',
  template: `
    <p class="normal">
      {{ yearMillieSeconds | humanizeDuration:{ delimiter: ' and ', largest: 2 } }}
    </p>
    <p class="normal-without-option">
      {{ yearMillieSeconds | humanizeDuration }}
    </p>
    <p class="normal-dynamic-options">
      {{ yearMillieSeconds | humanizeDuration:humanizeDurationOptions }}
    </p>
    <p class="dynamic">
      {{ millieSeconds | humanizeDuration:options }}
    </p>
  `,
  styles: [
  ]
})
export class NgxHumanizeDurationComponent implements OnInit {

  yearMillieSeconds = 1000;

  humanizeDurationOptions: HumanizerOptions = { delimiter: ' and ', largest: 2 };

  @Input() millieSeconds = 5000;

  @Input() options: HumanizerOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
