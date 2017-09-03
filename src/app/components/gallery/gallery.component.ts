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

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }

}
