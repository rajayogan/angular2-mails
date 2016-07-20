import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'; 

@Injectable()
export class UserService {

  constructor(private http: Http) {}
  
  addNew(usercreds) {
     var headers = new Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        var emailid = 'name=' + usercreds.username;
        
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        
        this.http.post('http://localhost:3333/adduser', creds, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
                this.http.post('http://localhost:3333/sendmail', emailid, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
              console.log('mail sent');
            }
                })
        }
        
            }
        )
        
        
    }
  }


