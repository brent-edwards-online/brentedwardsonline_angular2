import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Config } from '../config';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class QualificationService {

  constructor(private authHttp: AuthHttp) { }

  getAll(){
    let endPoint: string = Config.AUTHORIZATION_URL;
    return this.authHttp.get( endPoint + '/api/qualification').map((res:Response) => res.json());
  }

}
