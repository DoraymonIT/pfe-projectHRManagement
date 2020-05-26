import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametresAvancesComponent } from './parametres-avances.component';

describe('ParametresAvancesComponent', () => {
  let component: ParametresAvancesComponent;
  let fixture: ComponentFixture<ParametresAvancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametresAvancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametresAvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
