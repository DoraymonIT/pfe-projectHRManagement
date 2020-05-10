import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnDocumentComponent } from './ajouter-un-document.component';

describe('AjouterUnDocumentComponent', () => {
  let component: AjouterUnDocumentComponent;
  let fixture: ComponentFixture<AjouterUnDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterUnDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUnDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
