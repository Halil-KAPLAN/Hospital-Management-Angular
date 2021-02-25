import { PatientData } from './../models/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  patientData: PatientData[] = this.GetExampleJSON().patientRecords;

  GetExampleJSON() {
    const exampleJSON = {
      patientRecords: [
        { id: 1, firstName: 'Rohit', lastName: 'Joes', insurance: 'IN-3123', address: '3 cadlelight 2', phoneNumber: '2178012390' },
        { id: 2, firstName: 'Nancy', lastName: 'Koes', insurance: 'IN-3123', address: '3 cadlelight 2', phoneNumber: '2178012390' },
        { id: 3, firstName: 'Girish', lastName: 'Mahajan', insurance: 'IC-201302', address: '3 candle tree', phoneNumber: '2178012380' },
        { id: 4, firstName: 'Jammy', lastName: 'Richard', insurance: 'IC-21067', address: '3 wood mod 7', phoneNumber: '267812390' },
        { id: 5, firstName: 'Jony', lastName: 'James', insurance: 'IC-298989', address: '3 CANDLE WOOD', phoneNumber: '2156462390' },
        { id: 6, firstName: 'Ric', lastName: 'Johnson', insurance: 'IN-3123', address: '3 cadlelight 2', phoneNumber: '2176882390' }
      ]
    };
    return exampleJSON;
  }

  GetPatientDatas() {
    return this.patientData;
  }
  AddPatient(newPatient: PatientData) {
    this.patientData.push(newPatient);
  }
}
