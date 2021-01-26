import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questionnaire-component',
  templateUrl: './questionnaire-component.component.html',
  styleUrls: ['./questionnaire-component.component.scss']
})
export class QuestionnaireComponentComponent implements OnInit {
  @Input() questionnaire;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    
  }

}
