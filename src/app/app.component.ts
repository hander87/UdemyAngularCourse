import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female', 'other'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: 'hans@hanson.com'
      },
      secret: 'pet',
      questionAnswer: 'a',
      gender: 'male'
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value.username);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
