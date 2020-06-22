import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  MobileNo: '';
  OTPValue: '';
  isVisibleContinueButton: boolean = false;
  showOtpDiv = false;
  ShowRegisterDiv = false;
  registerForm: FormGroup;
  UserName: '';
  SocityName: '';


  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // document.getElementById('btnlogin').removeAttribute('disabled');
    const mobileNoPattern = '^[0-9]{10}$';
    this.loginForm = this.formBuilder.group({
      MobileNo: ['', [Validators.required, Validators.pattern(mobileNoPattern), Validators.maxLength(10)]],
      otpvalue: ['', [Validators.required, Validators.pattern(mobileNoPattern), Validators.maxLength(6)]]
    });


    const userNamePattern = '[a-zA-Z]+';
    this.registerForm = this.formBuilder.group({
      UserName: ['', [Validators.required, Validators.pattern(userNamePattern)]],
      SocityName: ['', [Validators.required]]
    })
  }

  get lform() {
    return this.loginForm.controls;
  }

  get otp(){
    return this.loginForm.get('otpvalue');
  }

  VerifyData() {
    this.ShowRegisterDiv = true;
    if (this.loginForm.invalid) {
      return
    }
    else {
      this.router.navigate(['auth/register']);
    }
  }
  get f() {
    return this.registerForm.controls;
  }



  LoginData() {
    this.isVisibleContinueButton = true;
    this.showOtpDiv = true;
  }

}
