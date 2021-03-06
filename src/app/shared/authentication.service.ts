import { User } from './../model/user.model';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(
      user.email, user.password
    );
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  authUser() {
    return this.user;
  }

  createUser(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(
      user.email, user.password
    )
  }
 }
