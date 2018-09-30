import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  fileUploadsCount: any;
  totalBill: any = 0;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.fileCount();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.fileCount();
      }
    });

    this.selectedFiles = undefined;
  }

  fileCount() {
    this.uploadService.getFilesCount().subscribe( data => {
      this.fileUploadsCount = data;
      if(data <=3) {
        this.totalBill = 0;
      } else {
        this.totalBill = parseFloat(""+(this.fileUploadsCount -3) * 0.25).toFixed(2);
      }
    }

    );
  }

}
