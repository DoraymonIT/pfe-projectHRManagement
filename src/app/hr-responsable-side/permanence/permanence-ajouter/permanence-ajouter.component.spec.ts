import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanenceAjouterComponent } from './permanence-ajouter.component';

describe('PermanenceAjouterComponent', () => {
  let component: PermanenceAjouterComponent;
  let fixture: ComponentFixture<PermanenceAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanenceAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanenceAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
