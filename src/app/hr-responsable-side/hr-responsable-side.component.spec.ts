import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRResponsableSideComponent } from './hr-responsable-side.component';

describe('HRResponsableSideComponent', () => {
  let component: HRResponsableSideComponent;
  let fixture: ComponentFixture<HRResponsableSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRResponsableSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRResponsableSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
