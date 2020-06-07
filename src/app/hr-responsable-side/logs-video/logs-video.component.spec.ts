import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsVideoComponent } from './logs-video.component';

describe('LogsVideoComponent', () => {
  let component: LogsVideoComponent;
  let fixture: ComponentFixture<LogsVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
