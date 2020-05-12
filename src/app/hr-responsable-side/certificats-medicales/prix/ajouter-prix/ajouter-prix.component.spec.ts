import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPrixComponent } from './ajouter-prix.component';

describe('AjouterPrixComponent', () => {
  let component: AjouterPrixComponent;
  let fixture: ComponentFixture<AjouterPrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
