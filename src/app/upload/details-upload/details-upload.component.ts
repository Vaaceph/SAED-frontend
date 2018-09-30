import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: string;
  api : string = environment.loadBalancerApiUrl;

  constructor() { }

  ngOnInit() {
  }

}
