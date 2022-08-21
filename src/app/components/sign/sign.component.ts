import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SignService} from "./sign.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  modalType: 'signIn' | 'signUp' | null = null;

  formSignUp = this.fb.group({
    nickname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    passwordRepeat: ['', Validators.required],
  });

  formSignIn = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(readonly fb: FormBuilder, readonly signService: SignService, readonly router: Router) { }

  toSignIn(){
    this.modalType = 'signIn';
  }

  toSignUp(){
    this.modalType = 'signUp';
  }

  async signIn(){
    await this.signService.signIn(this.formSignIn.getRawValue().email, this.formSignIn.getRawValue().password).subscribe(async result => {
      this.modalType = null;
      await this.router.navigate(['app', 'meetings'])
    })
  }

  async signUp(){
    await this.signService.signUp(this.formSignUp.getRawValue()).subscribe(async result => {
      this.modalType = null;
      await this.router.navigate(['app', 'meetings'])
    })
  }
}
