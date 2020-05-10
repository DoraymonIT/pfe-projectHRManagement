import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnDocumentsEmployeComponent } from './ajouter-un-documents-employe.component';

describe('AjouterUnDocumentsEmployeComponent', () => {
  let component: AjouterUnDocumentsEmployeComponent;
  let fixture: ComponentFixture<AjouterUnDocumentsEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterUnDocumentsEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUnDocumentsEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
