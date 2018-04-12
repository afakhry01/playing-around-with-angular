import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { oldPasswordValidator } from './oldPassword.validator'

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  password:string;

  form = new FormGroup({
    oldPassword : new FormControl('',Validators.required,oldPasswordValidator.checkOldPassword),
    newPassword : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
