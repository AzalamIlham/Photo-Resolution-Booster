import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  imports: [
    CommonModule,
    HttpClientModule
  ],
})
export class UploadComponent {
  selectedFile: File | null = null;
  hdImageUrl: string | null = null;
  isLoading = false;
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }



  uploadImage() {
    if (!this.selectedFile) return;
    this.isLoading = true;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post('http://127.0.0.1:5000/upload', formData, { responseType: 'blob' })
      .subscribe(blob => {
        const objectURL = URL.createObjectURL(blob);
        this.hdImageUrl = objectURL;
        this.isLoading = false;
      }, error => {
        console.error('Erreur lors de l’upload', error);
      });
  }
}
