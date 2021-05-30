import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxHumanizeDurationOptions } from 'ngx-humanize-duration';
import { languages, units } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-humanize-duration-showcase';
  defaultLanguage = 'en';
  defaultFallbacks = ['en'];
  defaultUnits = ['h', 'm', 's'];

  languages = languages;
  units = units;
  configurationForm;

  constructor() {
    this.initConfigurationForm();
  }

  initConfigurationForm() {
    this.configurationForm = new FormGroup({
      inputValue: new FormControl(100000),
      options: new FormGroup({
        language: new FormControl(this.defaultLanguage),
        fallbacks: new FormControl(this.defaultFallbacks),
        delimiter: new FormControl(', '),
        spacer: new FormControl(' '),
        largest: new FormControl(),
        units: new FormControl(this.defaultUnits),
        round: new FormControl(false),
        decimal: new FormControl('.'),
        conjunction: new FormControl(),
        serialComma: new FormControl(false),
        maxDecimalPoints: new FormControl(3),
      }),
    });
  }

  getOptionsForm() {
    return this.configurationForm.get('options');
  }

  getFallbacksControl() {
    return this.getOptionsForm().get('fallbacks');
  }

  onLanguageCleared() {
    const fallbacks = this.getFallbacksControl().value;
    this.getOptionsForm()
      .get('language')
      .patchValue(fallbacks.length > 0 ? '' : this.defaultLanguage);
  }

  onFallbacksCleared() {
    this.getFallbacksControl().patchValue(this.defaultFallbacks);
  }

  onUnitsCleared() {
    this.getOptionsForm().get('units').patchValue(this.defaultUnits);
  }
}
