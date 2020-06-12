import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  public memberForm: FormGroup;
  submitted = false;

  constructor(private formbulider: FormBuilder) {
    const memberItems = [];
    const phoneNoPattern = '^[0-9]{10}$';
    const memberNamePattern = '[a-zA-Z]+';
    memberItems.push(this.formbulider.group({
      MemberName: ['', [Validators.required, Validators.pattern(memberNamePattern)]],
      MemberPhoneNo: ['', [Validators.required, Validators.pattern(phoneNoPattern), Validators.minLength(10)]]
    }));

    this.memberForm = this.formbulider.group({
      memberDetails: this.formbulider.array(memberItems)
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.memberForm.controls;
  }

  AddRow() {
    const memberDetail = this.memberForm.get('memberDetails') as FormArray;
    memberDetail.push(this.CreateNewMember());

  }

  removePerson(i) {
    (<FormArray>this.memberForm.get('memberDetails')).removeAt(i);
  }

  CreateNewMember() {
    const phoneNoPattern = '^[0-9]{10}$';
    const memberNamePattern = '[a-zA-Z]+';
    return this.formbulider.group({
      MemberName: ['', [Validators.required, Validators.pattern(memberNamePattern)]],
      MemberPhoneNo: ['', [Validators.required, Validators.pattern(phoneNoPattern), Validators.minLength(10)]]
    })
  }

  SaveMember() {
    debugger
    this.submitted = true;
    if (this.memberForm.invalid) {
      return;
    }
  }
}
