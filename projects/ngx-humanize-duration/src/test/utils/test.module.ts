import { NgModule } from '@angular/core';

import { NgxHumanizeDurationModule } from '../../lib/ngx-humanize-duration.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [NgxHumanizeDurationModule],
  exports: [],
})
export class TestModule { }
