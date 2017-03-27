import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkService {

  constructor(private http: Http) {}

  getAll() {
      return this.http.get('../assets/data/workdata.json').map((res:Response) => res.json());
  }

}
