import { Component, OnInit } from '@angular/core';
import { QualificationService } from '../service/qualification.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css'],
  providers: [QualificationService]
})
export class QualificationsComponent implements OnInit {
  public qualificationList: any;
  constructor(private qualificationService: QualificationService) { }

  ngOnInit() {
    this.qualificationService.getAll().subscribe(result => this.qualificationList = result);
  }

}
