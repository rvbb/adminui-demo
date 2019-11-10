// This may for only administrator. 
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../@service/auth.service';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
    selector: 'user-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./../user.component.scss']
})
export class RegisterComponent {

    messages: string[];
    user: any;
    registerForm:FormGroup;
    showMessages:any;
    errors:string[];
    submitted:boolean = false;
    email: AbstractControl;
    password: AbstractControl;
    confirmPassword: AbstractControl;
    fullName: AbstractControl;

    constructor(service: AuthService, cd: ChangeDetectorRef, router: Router) {
        this.showMessages = {
            error: false
        }
        this.registerForm = this.initForm();
    }

    register(): void {

    }
    getConfigValue(key: string): any {

    }

    initForm() {
        return new FormGroup({
            email: new FormControl(),
            password: new FormControl(),
            confirmPassword: new FormControl(),
            rememberMe: new FormControl(),
            fullName:new FormControl()
        });
    }

    
    ngOnInit() {
        this.email = this.registerForm.controls.email;
        this.password = this.registerForm.controls.password;
        this.confirmPassword = this.registerForm.controls.confirmPassword;
        this.fullName = this.registerForm.controls.fullName;
    }
}
