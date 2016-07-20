import { Component } from '@angular/core';
import {UserService} from './user.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  newUser = {
    username: '',
    password: ''
  }
  
  constructor(private user: UserService) {}
  
  addUser() {
   this.user.addNew(this.newUser);
  }
}
