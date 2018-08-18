import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statusArray = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;
  forbiddenName = 'Test';

  ngOnInit() {
    this.projectForm = new FormGroup({
      // 'project': new FormControl(null, [Validators.required, this.forbiddenNameValidator.bind(this)]),
      'project': new FormControl(null, Validators.required, this.forbiddenNameValidator),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Critical'),
    });
  }

  // forbiddenNameValidator(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenName.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  forbiddenNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value.project);
    console.log(this.projectForm.value.email);
    console.log(this.projectForm.value.status);
    this.projectForm.reset();
  }

}
