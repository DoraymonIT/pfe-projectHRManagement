import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanenceComponent } from './permanence.component';

describe('PermanenceComponent', () => {
  let component: PermanenceComponent;
  let fixture: ComponentFixture<PermanenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
