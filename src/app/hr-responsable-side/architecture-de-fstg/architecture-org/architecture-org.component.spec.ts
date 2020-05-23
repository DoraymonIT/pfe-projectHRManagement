import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureOrgComponent } from './architecture-org.component';

describe('ArchitectureOrgComponent', () => {
  let component: ArchitectureOrgComponent;
  let fixture: ComponentFixture<ArchitectureOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
