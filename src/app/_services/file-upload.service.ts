import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private httpClient: HttpClient
  constructor() { }

  uploadImage(componentId, image) {
    const formData: FormData = new FormData();
    formData.append('Image', image, image.name);
    formData.append('ComponentId', componentId);
    return this.httpClient.post('/api/dashboard/UploadImage', formData);
  }
}
