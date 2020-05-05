import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatsMedicalesComponent } from './certificats-medicales.component';

describe('CertificatsMedicalesComponent', () => {
  let component: CertificatsMedicalesComponent;
  let fixture: ComponentFixture<CertificatsMedicalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatsMedicalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatsMedicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
