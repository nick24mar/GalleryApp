import { AppRoutes } from './app.routes';
import { ImageService } from './shared/image.service';
import { UploadService } from './shared/upload.service';
import { AuthenticationGuardService } from './shared/authentication-guard.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthenticationService } from './shared/authentication.service';
import { environment } from './../environments/environment.prod';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { UploadComponent } from './components/upload/upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent,
    ImageDetailComponent,
    UploadComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    UploadService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
