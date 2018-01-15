import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { SearchService } from './service/search.service';
import { HomeService } from './service/home.service'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
// Defining routes
const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"search",component:SearchComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
