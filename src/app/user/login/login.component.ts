import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../@service/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { get } from 'http';
import { TranslateService } from '@ngx-translate/core';
import Utils from '../../@service/global.util';
import { USERLS, REMEMBERMELS } from '../../@service/global.constance';
import { UserLogin } from '../../@service/global.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'user-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./../user.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    
    private destroy$: Subject<void> = new Subject<void>();

    redirectDelay: number;
    showMessages: any;
    strategy: string;
    errors: string[] = [];
    messages: string[];
    user: any;
    submitted: boolean = false;
    isRememberMe: boolean;

    loginForm: FormGroup;
  
    email:AbstractControl;
    password:AbstractControl;
    rememberMe:AbstractControl;

    constructor(private router: Router, private translate: TranslateService, private fb: FormBuilder, private authService: AuthService) {
        this.loginForm = this.initForm();
        this.showMessages = {
            error: false
        }
    }
    
    login() {
        this.submitted = true;
        var payload: UserLogin = {
            email: this.email.value,
            password: this.password.value,
            rememberMe: this.rememberMe.value
        }
        this.authService.doLogin(payload)
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => {
            if (res) {
                if (!res.userDto) {
                    this.submitted = false;
                    this.errors.push(this.translate.instant("user.login.wrongaccount"));
                } else {
                    if (res.code != 0) {
                        this.submitted = false;
                        this.errors.push(res.message);
                    } else {
                        Utils.writels(USERLS, res.userDto, true);
                        Utils.writels(REMEMBERMELS, 'true', false);
                        this.router.navigateByUrl('/pages');
                    }
                }
            }
        });
    }

    getConfigValue(key: string) { }

    initForm() {
        return this.fb.group({
            'email': [this.email, [Validators.required]],
            'password': [this.password, [Validators.required]],
            'rememberMe': [this.rememberMe],
        });
    }

    ngOnInit() {
        this.email = this.loginForm.controls.email;
        this.password = this.loginForm.controls.password;
        this.rememberMe = this.loginForm.controls.rememberMe;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
      }
}
