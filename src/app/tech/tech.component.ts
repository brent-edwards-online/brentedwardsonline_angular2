import { Component, OnInit } from '@angular/core';
import { TechService } from '../service/tech.service';
import { Observable } from 'rxjs/Rx';
import { TechFilterPipe } from '../pipes/techfilter.pipe';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
  providers: [TechService]
})
export class TechComponent implements OnInit {
  public techList;

  constructor(private techService: TechService) { }

  ngOnInit() {
    this.techService.getAll().subscribe(result => this.techList = result);
  }

}
