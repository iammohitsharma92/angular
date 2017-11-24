import { Injectable, NgModule } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { objectToParams } from 'utilities/utilities';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class RestService {
    public apiurl='https://jsonplaceholder.typicode.com/';
    makeRequest(url: string, isCs1: boolean, isPost?: boolean, postData?: any, timeout?: any): any {
    url=this.apiurl+url;
            this.headers = new Headers();
            this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        if (isPost) {           
            return this._http.post(url, (typeof postData === 'object' ? objectToParams(postData) : postData), { headers: this.headers })
                .map((response: Response) => <any>response.json())
                .catch(this.handleError);
        } else {
            return this._http.get(url, { headers: this.headers })
                .map((response: Response) => <any>response.json())
                .catch(this.handleError);
        }
    }
    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

  private headers: Headers;
  constructor(private _http: Http,
    private route: ActivatedRoute,
    private router: Router) { }
  private currentRoute;
  ngOnInit() {
    
  }

  public GetImages = (request:any): Observable<any> => {
      return this.Get('photos'+request);
  }
  public Get = (resultUrl): Observable<any> => {
      return this.makeRequest(resultUrl, false);
  }
}

