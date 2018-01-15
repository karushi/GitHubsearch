import { Component, OnInit } from '@angular/core';
import {  SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: any[];
  repos: any[];
  username:string;
  constructor(private SearchService:  SearchService  ) {

   }

   findSearch(){
     this.SearchService.updateSearch(this.username);
     this.SearchService.getProfileInfo().subscribe(search =>{
     console.log(search);
     this.search = search;

     })
     this.SearchService.getProfileRepos().subscribe(repos =>{
       console.log(repos);
       this.repos= repos;
     });
   }

ngOnInit() {
  }

}
