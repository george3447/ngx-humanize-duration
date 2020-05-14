import { NgModule } from '@angular/core';
import { NgxHumanizeDurationComponent } from './ngx-humanize-duration.component';
import { NgxHumanizeDurationPipe } from './ngx-humanize-duration.pipe';



@NgModule({
  declarations: [NgxHumanizeDurationComponent, NgxHumanizeDurationPipe],
  imports: [
  ],
  exports: [NgxHumanizeDurationPipe]
})
export class NgxHumanizeDurationModule { }
