import { SignupComponent } from './components/signup/signup.component';
import { AuthenticationGuardService } from './shared/authentication-guard.service';
import { LoginComponent } from './components/login/login.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { UploadComponent } from './components/upload/upload.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent,
        canActivate: [AuthenticationGuardService]
    },
    {
        path: 'upload',
        component: UploadComponent,
        canActivate: [AuthenticationGuardService]
    },
    {
        path: 'image/:id',
        component: ImageDetailComponent,
        canActivate: [AuthenticationGuardService]
    },
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },

];