import { Component, OnInit } from '@angular/core';
import { WorkService } from '../service/work.service';
import { Observable } from 'rxjs/Rx';
import { WorkFilterPipe } from '../pipes/workfilter.pipe';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [WorkService]
})
export class WorkComponent implements OnInit {
  public jobList;

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.workService.getAll().subscribe(result => this.jobList = result);
  }

}
