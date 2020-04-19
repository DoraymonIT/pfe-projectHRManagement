import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDeLoginComponent } from './footer-de-login.component';

describe('FooterDeLoginComponent', () => {
  let component: FooterDeLoginComponent;
  let fixture: ComponentFixture<FooterDeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
