import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statusArray = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'project': new FormControl(null, [Validators.required, this.forbiddenNameValidator.bind(this)]),
      'project': new FormControl(
        null,
        [Validators.required, CustomValidators.forbiddenNameValidator],
        CustomValidators.asyncForbiddenNameValidator
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical'),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value.project);
    console.log(this.projectForm.value.email);
    console.log(this.projectForm.value.status);
    this.projectForm.reset();
  }

}
