import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github Profile Search';
  githubUser: any;
  errorMessage: any;
  constructor() {
    this.githubUser = {};
  }
  ngOnInit() {
          this.githubUser.user = false;
          this.getUserInformation();
  }
  searchUser() {
  }

  getUserInformation() {
}
