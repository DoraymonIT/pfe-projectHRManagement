import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunitionComponent } from './punition.component';

describe('PunitionComponent', () => {
  let component: PunitionComponent;
  let fixture: ComponentFixture<PunitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
