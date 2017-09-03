import { GalleryImage } from './../model/gallery-image.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe( (auth) => {
      if (auth !== undefined && auth !== null ) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(): Observable<GalleryImage[]> {
    return this.db.list('uploads');
  }

}
