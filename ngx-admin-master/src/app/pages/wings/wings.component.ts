import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-wings',
  templateUrl: './wings.component.html',
  styleUrls: ['./wings.component.scss']
})
export class WingsComponent implements OnInit {

  wingForm: FormGroup;
  wingsNamePattern = '[a-zA-Z]+';
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.wingForm = this.formBuilder.group({
      wingsControllerArray: this.formBuilder.array([])
    })
  }

  arrayInputs = [{ wingsName: ['', [Validators.required, Validators.pattern(this.wingsNamePattern)]] }];


  ngOnInit(): void { this.setArrayInputs(this.arrayInputs) }

  setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.formBuilder.group(address));
    const formArray = this.formBuilder.array(arrayFG);
    this.wingForm.setControl('wingsControllerArray', formArray);
  }

  addInput() {
    (this.wingForm.get('wingsControllerArray') as FormArray).push(this.formBuilder.group({ wingsName: '' }))
  }

  removeWings(index) {
    this.wingForm.controls.wingsControllerArray["controls"].splice(index, 1)
  }

  SaveWings() {
    this.submitted = true;
    if (this.wingForm.invalid) {
      return;
    }
  }
}
