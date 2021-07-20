import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CustomePipe } from "../customepipe/custompipe";
import { StringEllipsisPipe } from "../customepipe/elipsispipe";

@NgModule({
  declarations: [
    AppComponent,
    CustomePipe,
    StringEllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
