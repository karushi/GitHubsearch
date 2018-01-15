import { Component, OnInit } from '@angular/core';
import {  HomeService } from '../service/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: any[];
  repos: any[];
  constructor(private HomeService:  HomeService  ) {
    this.HomeService.getProfileInfo().subscribe(search =>{
    console.log(search);
    this.search = search;

    })
    this.HomeService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos= repos;
    });
   }

  ngOnInit() {
  }

}
