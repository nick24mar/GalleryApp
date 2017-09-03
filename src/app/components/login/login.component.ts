import { AuthenticationService } from './../../shared/authentication.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  onLoad: boolean = false;
  email: string;
  password: string;
  err: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  signIn() {
    this.authService.login({ email: this.email, password: this.password })
      .then((resolve) => {
        this.router.navigate(['gallery'])
        this.onLoad = true;
      })
      .catch(error => this.err = error.message)
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then( resolve => this.router.navigate(['gallery']))
      .catch(error => this.err = error.message)
  }

  signOut() {
    this.authService.logout();
  }
}
