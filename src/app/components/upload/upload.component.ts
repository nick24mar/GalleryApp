import { UploadService } from './../../shared/upload.service';
import { Upload } from './../../model/upload.model';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  files: FileList;
  upload: Upload;
  constructor(private uploadService: UploadService) { }

  handleFiles(event) {
    this.files = event.target.files;
  }

  uploadFiles(input: HTMLInputElement) {
    const filesToUpload = this.files;
    const filesIndex = _.range(filesToUpload.length);
    let caption = input.value;
    _.each(filesIndex, (index) => {
      //console.log(filesToUpload[index]);
      this.upload = new Upload(filesToUpload[index]);
      this.uploadService.uploadFile(this.upload, caption);
    });
  }

  ngOnInit() {
  }

}
