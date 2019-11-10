import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../@service/auth.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'user-request-passwrord',
    templateUrl: 'request-password.component.html',
    styleUrls: ['./../user.component.scss']
})
export class RequestPasswordComponent implements OnInit {

    redirectDelay: number;
    showMessages: any;
    strategy: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    user: any;

    requestPasswordForm: FormGroup;
    email: AbstractControl;

    constructor(service: AuthService, private fb: FormBuilder, router: Router) {
        this.requestPasswordForm = this.fb.group({
            'email': [this.email, [Validators.required]]
        });
        this.showMessages = {
            error: false
        }
    }

    requestPass(): void { }
    getConfigValue(key: string): any { }

    ngOnInit() {
        this.email = this.requestPasswordForm.controls.email;
    }
}
