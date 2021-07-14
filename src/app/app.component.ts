import { Component } from '@angular/core';
import {
  ImageCroppedEvent,
  LoadedImage,
  ImageTransform,
} from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  file: any = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  disable = false;
  isSave = false;

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.file = event.target.files[0].name;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  previewImg() {
    this.disable = true;
  }

  imageLoaded() {
    this.showCropper = true;
  }
  loadImageFailed() {}

  save() {
    this.isSave = true;
  }
}
