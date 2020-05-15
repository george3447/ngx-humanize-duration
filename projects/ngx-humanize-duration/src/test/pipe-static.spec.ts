import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHumanizeDurationModule } from '../lib/ngx-humanize-duration.module';
import { getElementValueByClassName } from './utils/utils';
import { TestComponent } from './utils/test.component';


describe('Pipe with static input', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgxHumanizeDurationModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should humanize millisecond to seconds when using options directly in template', () => {
    expect(getElementValueByClassName(fixture, '.normal')).toEqual('1 second');
  });

  it('should humanize millisecond to seconds when using empty options', () => {
    expect(getElementValueByClassName(fixture, '.normal-without-option')).toEqual('1 second');
  });

  it('should humanize millisecond to seconds when using options dynamically', () => {
    expect(getElementValueByClassName(fixture, '.normal-dynamic-options')).toEqual('1 second');
  });
});

