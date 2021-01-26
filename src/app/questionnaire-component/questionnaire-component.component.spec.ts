import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireComponentComponent } from './questionnaire-component.component';

describe('QuestionnaireComponentComponent', () => {
  let component: QuestionnaireComponentComponent;
  let fixture: ComponentFixture<QuestionnaireComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
