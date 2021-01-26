import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../app/services/api-service.service';
import * as dataJSON from '../assets/questionnaire.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Mykhailo-Iliev-fhir-app-test';
  // @Input() JSONdata;
  formData = dataJSON.default
  testvalue = ';';
  formAnswers = {isCompleted: false};
  questionnaire = {isCompleted: false};

  submitForm(e) {
    e.preventDefault();
    this.formAnswers.isCompleted = true;
    this.questionnaire = this.formAnswers
  }

  registerValues(e) {
    // console.log(e.path[1].innerText);
    this.formAnswers[e.target.id] = e.target.value;
  }

  registerBoolean(e) {
    this.formAnswers[e.target.id] = e.target.checked;
  }

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {    
    // console.log(dataJSON.default);
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
      }
    )
  }
}


