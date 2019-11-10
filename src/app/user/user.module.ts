import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
  NbAlertModule,
  NbLayoutModule,
  NbIconModule
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/resetpwd.component';
import { AuthService } from '../@service/auth.service';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAuthBlockComponent, NbAuthModule } from '@nebular/auth';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,

    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule,
    NbInputModule,
    NbPopoverModule,
    NbSelectModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
    NbAlertModule,
    NbLayoutModule,
    NbIconModule,
    NbAuthModule,
    
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    LogoutComponent,
    RequestPasswordComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
