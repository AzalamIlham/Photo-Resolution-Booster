import { Component } from '@angular/core';
import {FileUploader, FileUploadModule} from 'ng2-file-upload';
import {UploadComponent} from './upload/upload.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    FileUploadModule,
    UploadComponent,
    CommonModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image HD Converter';

  constructor() {}
}
