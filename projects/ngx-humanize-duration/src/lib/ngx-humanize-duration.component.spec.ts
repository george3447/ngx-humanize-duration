import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import * as ms from 'ms';

import { NgxHumanizeDurationComponent } from './ngx-humanize-duration.component';
import { NgxHumanizeDurationPipe } from './ngx-humanize-duration.pipe';


describe('NgxHumanizeDurationComponent', () => {
  let component: NgxHumanizeDurationComponent;
  let fixture: ComponentFixture<NgxHumanizeDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxHumanizeDurationComponent, NgxHumanizeDurationPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHumanizeDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should humanize millisecond to seconds when using options directly in template', () => {
    expect(getElementValueByClassName(fixture, '.normal')).toEqual('1 second');
  });

  it('should humanize millisecond to seconds when using empty options', () => {
    expect(getElementValueByClassName(fixture, '.normal-without-option')).toEqual('1 second');
  });

  it('should humanize millisecond to seconds when using options dynamically', () => {
    expect(getElementValueByClassName(fixture, '.normal-dynamic-options')).toEqual('1 second');
  });

  it('should humanize millisecond to seconds when using dynamic input with dynamic options', () => {
    component.millieSeconds = 1000;
    component.options = { delimiter: ' and ', largest: 2 };
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 second');
  });

  it('should humanize English when passed no arguments', () => {
    component.millieSeconds = 1000;
    component.options = {};
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 second');
  });

  it('should humanize and change delimiter', () => {
    component.millieSeconds = 363000;
    component.options = { delimiter: '+' };
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('6 minutes+3 seconds');
  });

  it('should humanize and change spacer', () => {
    component.millieSeconds = 260040000;
    component.options = { spacer: ' whole ' };
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('3 whole days, 14 whole minutes');
  });

  it('should humanize and change conjunction', () => {
    component.millieSeconds = 10874000;
    component.options = { conjunction: ' and ' };
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('3 hours, 1 minute, and 14 seconds');
  });

  it('should humanize and change conjunction without a serial comma', () => {

    component.options = {
      conjunction: ' & ',
      serialComma: false
    };

    component.millieSeconds = 10874000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('3 hours, 1 minute & 14 seconds');

    component.millieSeconds = 260040000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('3 days & 14 minutes');

  });

  it('should humanize and change the units', () => {

    component.options = { units: ['d'] };

    component.millieSeconds = ms('6h');
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('0.25 days');

    component.millieSeconds = ms('8d');
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('8 days');

  });

  it('should humanize and change the unit measures', () => {

    component.options = {
      unitMeasures: {
        y: 10512000000,
        mo: 864000000,
        w: 144000000,
        d: 28800000,
        h: 3600000,
        m: 60000,
        s: 1000,
        ms: 1
      }
    };

    component.millieSeconds = 3600000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 hour');

    component.millieSeconds = 144000000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 week');

  });

  it('should humanize and change the decimal', () => {

    component.options = {
      units: ['s'],
      decimal: 'what'
    };

    component.millieSeconds = 1234;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1what234 seconds');
  });

  it('should humanize and do simple rounding', () => {
    component.options = { round: true };

    component.millieSeconds = 0;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('0 seconds');

    component.millieSeconds = 499;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('0 seconds');

    component.millieSeconds = 500;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 second');

    component.millieSeconds = 1000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 second');

    component.millieSeconds = 1499;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 second');

    component.millieSeconds = 1500;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('2 seconds');

    component.millieSeconds = 1500;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('2 seconds');

    component.millieSeconds = 121499;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('2 minutes, 1 second');

    component.millieSeconds = 121500;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('2 minutes, 2 seconds');
  });


  it('should humanize and ask for the largest units', () => {
    component.options = { largest: 2 };

    component.millieSeconds = 0;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('0 seconds');

    component.millieSeconds = 1000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 second');

    component.millieSeconds = 2000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('2 seconds');

    component.millieSeconds = 540360012;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('6 days, 6 hours');

    component.millieSeconds = 540360012;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('6 days, 6 hours');

  });


  it('should humanize and overwrite the languages property in the initializer', () => {
    component.options = {
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
      }
    };

    component.millieSeconds = 1000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 s');

    component.millieSeconds = 15600000;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('4 h, 20 m');

    component.millieSeconds = 71750;
    fixture.detectChanges();
    expect(getElementValueByClassName(fixture, '.dynamic')).toEqual('1 m, 11.75 s');

  });

});

function getElementValueByClassName(fixture: ComponentFixture<NgxHumanizeDurationComponent>, className: string) {
  return fixture.debugElement.query(By.css(className)).nativeElement.textContent.trim();
}
