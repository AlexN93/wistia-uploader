import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

const baseUrl = 'https://upload.wistia.com';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})

export class UploaderComponent implements OnInit {
  @Input() apiKey: string;

  error: string;
  showAlert: boolean;
  public uploader: FileUploader;
  public videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.apiKey = '7805814e5db46045e543c7fa0aa4dc2b8c276c267e469e617299dad2d57d905a';
    this.showAlert = false;
  }

  ngOnInit() {
    this.uploader = new FileUploader({
      url: this.getUrl(),
      isHTML5: true,
      autoUpload: true
    });

    this.uploader.onAfterAddingFile = ((fileItem: any) => {
      fileItem.withCredentials = false;
      return fileItem;
    });

    this.uploader.onSuccessItem = (item, response, status) => {
      let video = JSON.parse(response);
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`http://fast.wistia.com/embed/iframe/${video.hashed_id}/?videoFoam=true`);
    };

    this.uploader.onCompleteItem = (item) => {
      this.uploader.clearQueue();
    };

    this.uploader.onErrorItem = (item, response, status) => {
      console.log(response);
      let message = JSON.parse(response);
      this.showAlert = true;
      this.error = message.error || 'Server error.';
    };
  }

  private getUrl() {
    return `${baseUrl}/?api_password=${this.apiKey}`;
  }

}
