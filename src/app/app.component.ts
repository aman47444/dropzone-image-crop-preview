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
  trunkFileName = '';
  images: any = [];
  firstFileName = ''

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.file = event.target.files[0].name;
    this.setImageName(this.file);
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

  setImageName(file: any) {
    this.firstFileName = file.substring(0, file.length-7);
    this.trunkFileName = file.substring(file.length - 7);
  }

  save() {
    this.images.push({
      imageName: this.firstFileName,
      imageSrc: this.croppedImage,
      imageTrunkFileName: this.trunkFileName,
    });
    this.isSave = true;
  }
}
