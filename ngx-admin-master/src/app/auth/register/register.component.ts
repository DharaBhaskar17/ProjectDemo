import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  UserName: '';
  SocityName: '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const userNamePattern = '[a-zA-Z]+';
    this.registerForm = this.formBuilder.group({
      UserName: ['', [Validators.required, Validators.pattern(userNamePattern)]],
      SocityName: ['', [Validators.required]]
    })
  }

  get f() {
    return this.registerForm.controls;
  }
}
