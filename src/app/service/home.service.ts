import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class HomeService {
  private username:string;
  private clientid='d5a07300117eb75b5fc8';
  private clientsecret='b26d08e6f8cc295e9ce6b1ca73efbf79a6aa2a87';

  constructor(private http:Http) {
    console.log("service is now ready!")
    this.username='karushi';
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/"
     + this.username + "?client_id=" + this.clientid + "&client_secret="
     + this.clientsecret)
     .map(res => res.json());
  }
     getProfileRepos(){
       return this.http.get("https://api.github.com/users/"
       + this.username + "/repos?client_id=" + this.clientid + "&client_secret="
       + this.clientsecret)
       .map(res => res.json());
   }
}
