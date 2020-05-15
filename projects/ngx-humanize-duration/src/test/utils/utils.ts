import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestComponent } from './test.component';

export function getElementValueByClassName(fixture: ComponentFixture<TestComponent>, className: string) {
  return fixture.debugElement.query(By.css(className)).nativeElement.textContent.trim();
}
