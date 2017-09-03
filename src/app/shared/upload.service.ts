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
  
  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase, private router: Router) { }

  uploadFile(upload: Upload) {
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
          upload.name = upload.file.name;
          this.saveFileData(upload);
          this.router.navigate(['gallery']);
        }
    );
  }

  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}
