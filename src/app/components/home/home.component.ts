import { DataService } from './../../services/data.service';
import { PatientData } from './../../models/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patients: PatientData[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.patients = this.dataService.GetPatientDatas();
  }

}

