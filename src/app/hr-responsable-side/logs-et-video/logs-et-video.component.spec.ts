import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsEtVideoComponent } from './logs-et-video.component';

describe('LogsEtVideoComponent', () => {
  let component: LogsEtVideoComponent;
  let fixture: ComponentFixture<LogsEtVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsEtVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsEtVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
