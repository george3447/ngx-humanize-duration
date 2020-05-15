
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { NgxHumanizeDurationModule } from '../lib/ngx-humanize-duration.module';
import { TestComponent } from './utils/test.component';
import { getElementValueByClassName } from './utils/utils';


describe(`Module without configuration`, () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgxHumanizeDurationModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('should humanize millisecond to seconds in English', () => {
    component.millieSeconds = 1000;
    component.options = { delimiter: ' and ', largest: 2 };
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 second');
  });
});

describe(`Module with configuration via forRoot`, () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgxHumanizeDurationModule.forRoot({
        languages: {
          en: {
            y: () => 'y',
            mo: () => 'mo',
            w: () => 'w',
            d: () => 'd',
            h: () => 'h',
            m: () => 'm',
            s: () => 's',
            ms: () => 'ms',
          }
        },
        delimiter: ' or '
      })]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('should humanize millisecond to seconds with custom seconds message', () => {
    component.millieSeconds = 1000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 s');
  });

  it('should humanize millisecond to seconds and override delimiter and language in component level', () => {
    component.millieSeconds = 1000000;
    component.options = { delimiter: ' and ', largest: 2, language: 'es' };
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('16 minutos and 40 segundos');
  });

});

describe(`Module with configuration via forFeature`, () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgxHumanizeDurationModule.forFeature({
        languages: {
          en: {
            y: () => 'y',
            mo: () => 'mo',
            w: () => 'w',
            d: () => 'd',
            h: () => 'h',
            m: () => 'm',
            s: () => 's',
            ms: () => 'ms',
          }
        },
        delimiter: ' or '
      })]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('should humanize millisecond to seconds with custom seconds message', () => {
    component.millieSeconds = 1000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 s');
  });

  it('should humanize millisecond to seconds and override delimiter and language in component level', () => {
    component.millieSeconds = 1000000;
    component.options = { delimiter: ' and ', largest: 2, language: 'es' };
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('16 minutos and 40 segundos');
  });

});
