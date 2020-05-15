import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as ms from 'ms';

import { TestComponent } from './utils/test.component';
import { NgxHumanizeDurationModule } from '../lib/ngx-humanize-duration.module';
import { getElementValueByClassName } from './utils/utils';


describe('Pipe with dynamic inputs', () => {
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

});
