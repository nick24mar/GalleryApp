import { FirebaseListObservable } from 'angularfire2/database';
import { GalleryImage } from './../model/gallery-image.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;
  private images: FirebaseListObservable<GalleryImage[]>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe( (auth) => {
      if (auth !== undefined && auth !== null ) {
        this.uid = auth.uid;
      }
    });

    this.images = db.list('uploads');
  }

  getImages(): Observable<GalleryImage[]> {
    return this.images;
  }

  removeImage(key: string) {
    return this.images.remove(key);
  }

}
