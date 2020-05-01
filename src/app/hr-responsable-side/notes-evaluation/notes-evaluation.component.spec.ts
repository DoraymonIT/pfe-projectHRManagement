import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEvaluationComponent } from './notes-evaluation.component';

describe('NotesEvaluationComponent', () => {
  let component: NotesEvaluationComponent;
  let fixture: ComponentFixture<NotesEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
