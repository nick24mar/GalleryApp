import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { GalleryImage } from './../model/gallery-image.model';
import { Upload } from './../model/upload.model';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Injectable } from '@angular/core';
@Injectable()
export class UploadService {

  private basePath = '/uploads';
  private uploads: FirebaseListObservable<GalleryImage[]>;
  private user:any;
  
  constructor(private ngFire: AngularFireModule,
    private db: AngularFireDatabase,
    private router: Router,
    private afAuth: AngularFireAuth) {
       this.afAuth.authState.subscribe( (auth => {
        if ( auth ) {
          this.user = auth;
        }
       }));
  }

  uploadFile(upload: Upload, caption: string) {
    const storageRef = firebase.storage().ref();
    const taskUpload = storageRef.child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);
    
    taskUpload.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          upload.progress = ( taskUpload.snapshot.bytesTransferred / taskUpload.snapshot.totalBytes ) * 100;
        },
        (error) => {
          console.log(error);
        },
        (): any => {
          upload.URL = taskUpload.snapshot.downloadURL;
          upload.userDisplayName = this.user.displayName;
          upload.userPhotoURL = this.user.photoURL;
          upload.createdOn = Date.now();
          upload.caption = caption;
          this.saveFileData(upload);
          this.router.navigate(['gallery']);
        }
    );
  }

  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}
