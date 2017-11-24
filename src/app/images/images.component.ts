import { Component, OnInit } from '@angular/core';
import {RestService} from 'rest.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { GroupByPipe } from '../../filter/groupByPipe';
import * as _ from 'underscore';
@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.css'],
    providers: [RestService]
})
export class ImagesComponent implements OnInit {
    public result;
    public imageResponse = [];
    public filteredList=[];
    public AlbumId;
    public imageInfo;
    public constructor(private _restService: RestService) {
   
    }

    public ngOnInit() {
        this.getImages();
        
    }

    public getImages() {
        var request='';
        this._restService.GetImages(request).subscribe((data: any[]) => this.result = data,
            error => console.log(error),
            () => {
                this.imageResponse = this.result;
                this.AlbumId=this.imageResponse[0].albumId;
                this.getfiltredalbumImages(this.AlbumId);
            });
    }

    public getfiltredalbumImages(Id){
        if(Id>0){
            this.AlbumId=Id;
      this.filteredList=  _.filter(this.imageResponse,function(item){
            return item.albumId==Id;
        });
        this.getimageInfo(this.filteredList[0].id);
    }
    }

    public getimageInfo(Imageid){
        if(Imageid>0){
      this.imageInfo=  _.filter(this.filteredList,function(image){
            return image.id==Imageid;
        })[0];
     }
    }
}
