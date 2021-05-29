import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxHumanizeDurationPipe } from './ngx-humanize-duration.pipe';
import { NgxHumanizerOptions, NGX_HUMANIZER_CONFIG } from './ngx-humanize-duration.types';
import { NgxHumanizeDurationService } from './ngx-humanize-duration.service';

@NgModule({
  declarations: [NgxHumanizeDurationPipe],
  imports: [],
  exports: [NgxHumanizeDurationPipe],
  providers: []
})
export class NgxHumanizeDurationModule {
  static forRoot(config?: NgxHumanizerOptions): ModuleWithProviders<NgxHumanizeDurationModule> {
    return {
      ngModule: NgxHumanizeDurationModule,
      providers: [
        { provide: NGX_HUMANIZER_CONFIG, useValue: config },
      ]
    };
  }
  static forFeature(config?: NgxHumanizerOptions): ModuleWithProviders<NgxHumanizeDurationModule> {
    return {
      ngModule: NgxHumanizeDurationModule,
      providers: [
        { provide: NGX_HUMANIZER_CONFIG, useValue: config },
        NgxHumanizeDurationService
      ]
    };
  }
}
