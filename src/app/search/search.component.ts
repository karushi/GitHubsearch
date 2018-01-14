import { Component, OnInit } from '@angular/core';
import {  SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: any[];
  constructor(private SearchService:  SearchService  ) {
    this.SearchService.getProfileInfo().subscribe(search =>{
    console.log(search);
    this.search = search;

    });
   }

  ngOnInit() {
  }

}
