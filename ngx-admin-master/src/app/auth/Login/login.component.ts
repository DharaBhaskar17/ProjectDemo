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
  show = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    document.getElementById('btnlogin').removeAttribute('disabled');
    const mobileNoPattern = '^[0-9]{10}$';
    const OTPPattern = '^[0-9]{10}$';
    this.loginForm = this.formBuilder.group({
      MobileNo: ['', [Validators.required, Validators.pattern(mobileNoPattern), Validators.maxLength(10)]],
      OTP: ['', [Validators.required, Validators.pattern(OTPPattern), Validators.maxLength(6)]]
    });
  }

  get lform() {
    return this.loginForm.controls;
  }

  VerifyData() {
    this.router.navigate(['auth/register']);
    if (this.loginForm.invalid) {
      return
    }
    else {
      this.router.navigate(['auth/register']);
    }
  }

  LoginData() {
    debugger
    document.getElementById('btnlogin').setAttribute('disabled', 'false');
    this.show = true;
  }

}
