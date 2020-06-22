import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {


  memberForm: FormGroup;
  submitted = false;

  constructor(private formbulider: FormBuilder) { }
  memberDataArr: any;

  ngOnInit(): void {

    this.memberForm = this.formbulider.group({
      memberDetails: this.formbulider.array([this.CreateNewMember()])
    })
  }


  get f() {
    return this.memberForm.controls;
  }

  AddRow() {
    (this.memberForm.controls['memberDetails'] as FormArray).push(this.CreateNewMember());
  }

  removePerson(i) {
    (<FormArray>this.memberForm.get('memberDetails')).removeAt(i);
  }

  // removeWings(i) {
  //   this.memberForm.controls['memberDetails'].splice(i, 1)
  // }

  CreateNewMember() {
    const phoneNoPattern = '^[0-9]{10}$';
    const memberNamePattern = '[a-zA-Z]+';
    return this.formbulider.group({
      MemberName: ['', [Validators.required, Validators.pattern(memberNamePattern)]],
      MemberPhoneNo: ['', [Validators.required, Validators.pattern(phoneNoPattern), Validators.maxLength(10)]]
    })
  }
  

  SaveMember() {
    this.submitted = true;
    if (this.memberForm.invalid) {
      return;
    }
    else {
      this.memberDataArr = [];
      let item = this.memberForm.controls.memberDetails['controls'];
      for (let i = 0; i < item.length; i++) {
        const itemValue = item[i];
        let itemObj = {
          MemberName: itemValue.controls.MemberName.value,
          MemberPhoneNo: itemValue.controls.MemberPhoneNo.value
        }
        this.memberDataArr.push(itemObj);
      }
      // this.memberDataArr = [{
      //   MemberName: this.memberForm.controls.MemberName.value,
      //   MemberPhoneNo: this.memberForm.controls.MemberPhoneNo.value
      // }]
    }
  }
}
