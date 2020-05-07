import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanenceCalendrierComponent } from './permanence-calendrier.component';

describe('PermanenceCalendrierComponent', () => {
  let component: PermanenceCalendrierComponent;
  let fixture: ComponentFixture<PermanenceCalendrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanenceCalendrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanenceCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
