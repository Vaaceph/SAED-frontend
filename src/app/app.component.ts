import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAED';
  description = 'Save And Edit text Documents';
  constructor(){
    localStorage.setItem("UserId", "1");
  }
}
