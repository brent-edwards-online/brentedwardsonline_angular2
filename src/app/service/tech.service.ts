import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TechService {

  constructor(private http: Http) { }

  getAll(){
    return this.http.get('https://www.brentedwardsonline.com/api/tech.php').map((res:Response) => res.json());
    //return this.http.get('http://localhost:2056/api/tech.php').map((res:Response) => res.json());
    //return this.http.get('../assets/data/techdata.json').map((res:Response) => res.json());
  }

}
