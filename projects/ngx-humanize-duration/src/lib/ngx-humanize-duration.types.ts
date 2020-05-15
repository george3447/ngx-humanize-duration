import { HumanizerOptions, Options } from 'humanize-duration';
import { InjectionToken } from '@angular/core';

export type NgxHumanizerOptions = HumanizerOptions;
export type NgxHumanizeDurationOptions = Options;
export const NGX_HUMANIZER_CONFIG = new InjectionToken<NgxHumanizerOptions>('ngxHumanizerConfig');
