# Angular Humanize Duration

[![npm version](https://badge.fury.io/js/ngx-humanize-duration.svg)](https://badge.fury.io/js/ngx-humanize-duration) &nbsp; ![Build](https://github.com/george3447/ngx-humanize-duration/workflows/Build/badge.svg?branch=master)

Angular wrapper for [Humanize Duration](https://www.npmjs.com/package/humanize-duration) library. Provides Angular pipe and service.

## Installation

```sh
npm install humanize-duration ngx-humanize-duration
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

With pipe in templates

```html
<p>
  {{ yearInMillieSeconds | humanizeDuration:{ delimiter: ' and ', largest:2 } }}
</p>
```

With a service

```ts
import {
  NgxHumanizeDurationOptions,
  NgxHumanizeDurationService,
} from "ngx-humanize-duration";

@Injectable({
  providedIn: "root",
})
export class MyService {
  constructor(private ngxHumanizeDurationService: NgxHumanizeDurationService) {}

  humanizeDuration(value: number, options?: NgxHumanizeDurationOptions) {
    return this.ngxHumanizeDurationService.humanizeDuration(value, options);
  }
}
```

## Advanced Usage

If you find yourself setting same options over and over again, you can set the defaults using forRoot method, which you can still override at Module or Component or Service level

```typescript
import { NgxHumanizeDurationModule, NgxHumanizerOptions } from 'ngx-humanize-duration';

const defaults: NgxHumanizerOptions = {};

@NgModule({
  imports: [
    NgxHumanizeDurationModule.forRoot(defaults)
  ],
})
```

If you have Lazy Loaded modules and you want to use the defaults that you have set using above method, just import the NgxHumanizeDurationModule

```typescript
import { NgxHumanizeDurationModule, NgxHumanizerOptions } from 'ngx-humanize-duration';

const defaults: NgxHumanizerOptions = {};

@NgModule({
  imports: [
    NgxHumanizeDurationModule
  ],
})
```

If you want to override the defaults at Module Level

```typescript
import { NgxHumanizeDurationModule, NgxHumanizerOptions } from 'ngx-humanize-duration';

const moduleLevelOptions: NgxHumanizerOptions = {};

@NgModule({
  imports: [
    NgxHumanizeDurationModule.forFeature(moduleLevelOptions)
  ],
})
```

If you want to override the defaults at Component level

```html
<p>
  {{ yearInMillieSeconds | humanizeDuration:{ componentLevelOptions } }}
</p>
```

If you want to override the defaults at Service level

```ts
import { NgxHumanizeDurationService } from "ngx-humanize-duration";

@Injectable({
  providedIn: "root",
})
export class MyService {
  constructor(private ngxHumanizeDurationService: NgxHumanizeDurationService) {}

  humanizeDuration() {
    const humanizedDuration = this.ngxHumanizeDurationService.humanizeDuration(
      value,
      newOptions
    );
  }
}
```
