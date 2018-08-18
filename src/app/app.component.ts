import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') subForm: NgForm;
  defaultSubscription = 'basic';
  subs = {
    email: '',
    subscription: '',
    password: ''
  };
  formSent = false;

  onSubmit() {
    console.log(this.subForm);

    this.subs.email = this.subForm.value.email;
    this.subs.subscription = this.subForm.value.subscription;
    this.subs.password = this.subForm.value.password;
    this.formSent = true;

    console.log(this.subs.email);
    console.log(this.subs.subscription);
    console.log(this.subs.password);
  }

}
