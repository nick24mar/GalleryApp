import { AuthenticationService } from './../../shared/authentication.service';
import { GalleryImage } from './../../model/gallery-image.model';
import { Observable } from 'rxjs/Observable';
import { ImageService } from './../../shared/image.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  images: Observable<GalleryImage[]>;
  user: Observable<firebase.User>;

  constructor(private imageService: ImageService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    this.user = this.authService.authUser();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
    this.user = this.authService.authUser();
  }

  deleteImage(key) {
    this.imageService.removeImage(key);
  }


}
