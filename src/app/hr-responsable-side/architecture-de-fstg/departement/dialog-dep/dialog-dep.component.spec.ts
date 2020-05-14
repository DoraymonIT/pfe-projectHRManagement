import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDepComponent } from './dialog-dep.component';

describe('DialogDepComponent', () => {
  let component: DialogDepComponent;
  let fixture: ComponentFixture<DialogDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
