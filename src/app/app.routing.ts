import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Routing 
 import { ImagesComponent } from './images/images.component';

export const routes=[
     { path: "", component: ImagesComponent },
    { path: "Images", component: ImagesComponent },
];
export const navigatableComponents = [
    ImagesComponent
];
