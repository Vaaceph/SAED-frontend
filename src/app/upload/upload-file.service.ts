import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('UserId', localStorage.getItem("UserId"));

    const req = new HttpRequest('POST', environment.loadBalancerApiUrl + 'api/files/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    var userId = localStorage.getItem("UserId");
    return this.http.get(environment.loadBalancerApiUrl + "api/files/all?userid=" + userId);
  }

  getFilesCount(): Observable<any> {
    var userId = localStorage.getItem("UserId");
    return this.http.get(environment.loadBalancerApiUrl + "api/files/count?userid=" + userId);
  }
}
