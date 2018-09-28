import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'other'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl('Default Hannes', Validators.required),
      'email': new FormControl('asdf@sadf.se', [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
