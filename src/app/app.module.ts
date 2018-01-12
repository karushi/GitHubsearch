import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
