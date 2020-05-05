import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureDeFSTGComponent } from './architecture-de-fstg.component';

describe('ArchitectureDeFSTGComponent', () => {
  let component: ArchitectureDeFSTGComponent;
  let fixture: ComponentFixture<ArchitectureDeFSTGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureDeFSTGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureDeFSTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
