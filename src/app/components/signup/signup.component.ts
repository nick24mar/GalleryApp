import { Router } from '@angular/router';
import { AuthenticationService } from './../../shared/authentication.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.myForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      this.authService.createUser(form.value)
        .then( success => {
          this.router.navigate(['login']);
          console.log(success);
        })
        .catch( error => {
          console.log(error);
        });
    }
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

}
