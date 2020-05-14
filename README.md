# Angular Humanize Duration

Angular wrapper for [Humanize Duration](https://www.npmjs.com/package/humanize-duration) library. Provides angular pipe and service.

## Installation

```sh
npm install ngx-humanize-duration
```

## Quick Start

Import **ngx-humanize-duration** module in Angular app.

```typescript
import { NgxHumanizeDurationModule } from 'ngx-humanize-duration';

@NgModule({
  imports: [
    NgxHumanizeDurationModule
  ],
})
```

## Usage

With `pipe` in templates:

```html
<p>
  {{ yearMillieSeconds | humanizeDuration:{ delimiter: ' and ', largest:2 } }}
</p>
```

With a `service` or `component.ts`:

```ts
import { NgxHumanizeDurationService } from 'ngx-humanize-duration';
import { Options } from 'humanize-duration';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private ngxHumanizeDurationService: NgxHumanizeDurationService) { }

  humanizeDuration(value: number, options?: Options) {
    return this.ngxHumanizeDurationService.humanizeDuration(value, options)
  }

}
```
