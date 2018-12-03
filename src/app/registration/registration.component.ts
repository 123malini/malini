import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

import * as caas_en from '../content/registration_eng.json';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';


  headinglbl = '';
  fnamelbl = '';
  lname ='';
  unamError1 = '';
  lastError = '';
  emailError = '';
  emailError1 = '';
  qualificationlabel = '';
  genderList1 = [];
  qualificationList = [];


  regFrom: FormGroup;

  isValidFormSubmitted = null;

 
  constructor(private formBuilder: FormBuilder) { 
//alert(1);
    this.regFrom = this.formBuilder.group({
      fname: ['nnhhg', [Validators.required]],
      lastname: ['',[Validators.required]],
      email: ['',[Validators.required ,Validators.pattern(this.emailPattern)]],
      genderList1: [''],
      qualificationList: [''],

    });
  }

  ngOnInit() {
//alert(2);
    this.headinglbl = (<any>caas_en).headinglbl;
    this.fnamelbl = (<any>caas_en).fnamelbl;
    this.lname = (<any>caas_en).lname;
    this.unamError1 = (<any>caas_en).unamError1;
    this.lastError = (<any>caas_en).lastError;
    this.emailError = (<any>caas_en).emailError;
    this.emailError1 = (<any>caas_en).emailError1;
    this.genderList1 = (<any>caas_en).genderList1;
    this.qualificationList = (<any>caas_en).qualificationList;
    this.qualificationlabel = (<any>caas_en).qualificationlabel;




  }
  onSubmitForm(){
    this.isValidFormSubmitted = false;
    console.log("formValue" +this.regFrom);
    console.log("fname" +this.fname);

    if (this.regFrom.invalid) {
      return;
   }

  }

  get fname() {
    return this.regFrom.get('fname');
 }
 get lastname(){
   return this.regFrom.get('lastname');
 }
 get email(){
  return this.regFrom.get('email');
}
}

