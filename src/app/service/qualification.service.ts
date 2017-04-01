import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QualificationService {

  constructor(private http: Http) { }

  getAll(){
    return this.http.get('https://lb.brentedwardsonline.com/api/qualification').map((res:Response) => res.json());
    //return this.http.get('http://localhost:5000/api/qualification').map((res:Response) => res.json());
  }

}
