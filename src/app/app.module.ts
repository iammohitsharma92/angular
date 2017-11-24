import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes, navigatableComponents } from "./app.routing";
import { AppComponent } from './app.component';
import { GroupByPipe } from '../filter/groupByPipe';
import {
RouterModule,
Routes
}  from '@angular/router';
import { ImagesComponent } from './images/images.component';
@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
