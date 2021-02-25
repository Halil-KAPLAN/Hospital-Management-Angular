import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { PatientData } from './../../models/data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }
  patients: PatientData[];
  patientForm: FormGroup;
  modalMod: string;
  openedPatient: PatientData;

  ngOnInit(): void {
    this.patients = this.dataService.GetPatientDatas();
    this.patientForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      insurance: '',
      phoneNumber: '',
      address: ''
    });
  }

  AddPatientButton() {
    this.modalMod = 'add';
    this.ClearPatientForm();
  }
  AddUpdatePatient() {
    switch (this.modalMod) {
      case 'add':
        this.patientForm.value.id = this.dataService.GetPatientDatas().length + 1;
        this.dataService.AddPatient(this.patientForm.value);
        this.ClearPatientForm();
        break;
      case 'update':
        const patientControls = this.patientForm.controls;
        for (const key in patientControls) {
          if (patientControls.hasOwnProperty(key)) {
            const control = patientControls[key];
            this.openedPatient[key] = control.value;
          }
        }
        break;
    }
  }
  RemovePatient(patient: PatientData) {
    const index = this.patients.indexOf(patient);
    this.patients.splice(index, 1);
  }
  ClearPatientForm() {
    this.ControlSetValueLoop(undefined);
  }
  EditOpenModal(pati: PatientData) {
    this.modalMod = 'update';
    this.openedPatient = pati;
    this.ControlSetValueLoop(pati);
  }
  ControlSetValueLoop(pati: PatientData) {
    const patientControls = this.patientForm.controls;
    for (const key in patientControls) {
      if (patientControls.hasOwnProperty(key)) {
        const control = patientControls[key];
        if (pati === undefined) {
          control.setValue('');
        } else {
          control.setValue(pati[key]);
        }
      }
    }
  }

}
