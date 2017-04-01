import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import { Config } from '../config';

@Injectable()
export class LinkedinService {

  private static readonly CLIENT_ID: string = "866m9i0k2pr2qb";
  private static readonly CLIENT_SECRET: string = "tPGbUPNuTJVUqBnc";
  private static readonly LINKEDIN_AUTH_ENDPOINT: string = "https://www.linkedin.com/oauth/v2/authorization";

  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) { }

  signin(): Observable<any> {
    let params: any = {};
    let body: string = this.encodeParams(params);
    return this.http.get(LinkedinService.LINKEDIN_AUTH_ENDPOINT, this.options)
      .map((res: Response) => {
        // Success
        let body: any = res.json();
    
      }).catch((error: any) => {
        // Fail
        return Observable.throw(error);
    });
  }

  private encodeParams(params: any): string {
        let body: string = "";
        for (let key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }
        return body;
    }
}
