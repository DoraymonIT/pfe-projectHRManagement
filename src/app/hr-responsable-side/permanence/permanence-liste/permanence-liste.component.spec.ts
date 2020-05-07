import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanenceListeComponent } from './permanence-liste.component';

describe('PermanenceListeComponent', () => {
  let component: PermanenceListeComponent;
  let fixture: ComponentFixture<PermanenceListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanenceListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanenceListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
