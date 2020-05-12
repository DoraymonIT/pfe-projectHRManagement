import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPunitionComponent } from './ajouter-punition.component';

describe('AjouterPunitionComponent', () => {
  let component: AjouterPunitionComponent;
  let fixture: ComponentFixture<AjouterPunitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPunitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPunitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
