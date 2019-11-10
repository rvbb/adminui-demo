import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../@service/auth.service';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'user-resetpwd',
  templateUrl: 'resetpwd.component.html',
  styleUrls: ['./../user.component.scss']
})
export class ResetPasswordComponent {

  redirectDelay: number;
  showMessages: any;
  strategy: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  user: any;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  resetForm: FormGroup;
  constructor(service: AuthService, cd: ChangeDetectorRef, router: Router) {
    this.resetForm = this.initForm();
    this.showMessages = {
      error: false
    }
  }
  resetPass(): void { }
  getConfigValue(key: string): any { }

  initForm() {
    return new FormGroup({
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  ngOnInit() {
    this.password = this.resetForm.controls.password;
    this.confirmPassword = this.resetForm.controls.confirmPassword;
}
}
