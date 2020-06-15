import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  memberData: any;
  memberForm: FormGroup;
  submitted = false;


  constructor(private formbulider: FormBuilder) {
    const memberItems = [];
    memberItems.push(this.formbulider.group({
      MemberName: [],
      MemberPhoneNo: []
    }));

    // const phoneNoPattern = '^[0-9]{10}$';
    // const memberNamePattern = '[a-zA-Z]+';
    // memberItems.push(this.formbulider.group({
    //   MemberName: ['', [Validators.required, Validators.pattern(memberNamePattern)]],
    //   MemberPhoneNo: ['', [Validators.required, Validators.pattern(phoneNoPattern), Validators.minLength(10)]]
    // }));

    // this.memberForm = this.formbulider.group({
    //   memberDetails: this.formbulider.array(memberItems)
    // })
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
    return this.formbulider.group({
      MemberName: [],
      MemberPhoneNo: []
    })

    // const phoneNoPattern = '^[0-9]{10}$';
    // const memberNamePattern = '[a-zA-Z]+';
    // return this.formbulider.group({
    //   MemberName: ['', [Validators.required, Validators.pattern(memberNamePattern)]],
    //   MemberPhoneNo: ['', [Validators.required, Validators.pattern(phoneNoPattern), Validators.maxLength(10)]]
    // })

  }


  SaveMember() {
    const memberItems = [];
    const memberDetail = this.memberForm.get('memberDetails') as FormArray;
    const phoneNoPattern = '^[0-9]{10}$';
    const memberNamePattern = '[a-zA-Z]+';

    for (let index = 0; index < memberDetail.controls.length; index++) {
      const element = memberDetail.controls[index];
      let item = element['controls'];
      if (!item.MemberName.value || !item.MemberPhoneNo.value) {
        let memberNameValue = item.MemberName;
        let memberPhoneNoValue = item.MemberPhoneNo;

        memberItems.push(this.formbulider.group({
          memberNameValue: ['', [Validators.required, Validators.pattern(memberNamePattern)]],
          memberPhoneNoValue: ['', [Validators.required, Validators.pattern(phoneNoPattern), Validators.minLength(10)]]
        }))
      }
      this.memberForm = this.formbulider.group({
        memberDetails: this.formbulider.array(memberItems)
      })
    }

    // this.memberForm = this.formbulider.group({
    //   memberDetails: this.formbulider.array(memberItems)
    // })
    // const memberItems = [];
    // const phoneNoPattern1 = '^[0-9]{10}$';
    // const memberNamePattern1= '[a-zA-Z]+';
    // memberItems.push(this.formbulider.group({
    //   MemberName: ['', [Validators.required, Validators.pattern(memberNamePattern1)]],
    //   MemberPhoneNo: ['', [Validators.required, Validators.pattern(phoneNoPattern1), Validators.minLength(10)]]
    // }));

    // this.memberForm = this.formbulider.group({
    //   memberDetails: this.formbulider.array(memberItems)
    // })

    this.submitted = true;
    if (this.memberForm.invalid) {
      return;
    }
    else {
      let item = {};
      item = {
        MemberName: this.memberForm.controls.MemberName.value,
        MemberPhoneNo: this.memberForm.controls.MemberPhoneNo.value,
      }
      this.memberData.push(item);
    }
  }
}
