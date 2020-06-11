import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDeDocumentEnLigneComponent } from './formulaire-de-document-en-ligne.component';

describe('FormulaireDeDocumentEnLigneComponent', () => {
  let component: FormulaireDeDocumentEnLigneComponent;
  let fixture: ComponentFixture<FormulaireDeDocumentEnLigneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireDeDocumentEnLigneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDeDocumentEnLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
