import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  logout() {
    this.authService.logout()
      .then( onResolve => this.router.navigate(['/']))
  }

}
