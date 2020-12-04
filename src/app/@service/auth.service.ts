/**
 * Authenticate and authorize
 * Created by Hoang N.V, 16 Oct 2019.
 **/

import { Observable, of } from 'rxjs';
import { AuthToken, UserDto, UserLogin, UserLoginRespone } from './global.interface';
import { Injectable } from '@angular/core';
import { ROLE_ADMIN, ROLE_SUPERVISOR, USERLS } from './global.constance';
import { UserData } from '../@core/data/users';
import { LoginComponent } from '../user/login/login.component';
import Utils from './global.util';
// import decode from 'jwt-decode';

@Injectable()
export class AuthService {
    // getToken(): Observable<AuthToken>{
    //     return of(null);
    // }

    // isAuthenticated(): Observable<boolean>{}
    // isAuthenticatedOrRefresh(): Observable<boolean>{}
    // onTokenChange(): Observable<AuthToken>{}
    // onAuthenticationChange(): Observable<boolean>{}

    // authenticate(strategyName: string, data?: any): Observable<NbAuthResult>;
    // register(strategyName: string, data?: any): Observable<NbAuthResult>;
    // logout(strategyName: string): Observable<NbAuthResult>;

    // requestPassword(strategyName: string, data?: any): Observable<NbAuthResult>;
    // resetPassword(strategyName: string, data?: any): Observable<NbAuthResult>;
    // refreshToken(strategyName: string, data?: any): Observable<NbAuthResult>; 

    getUser(): Observable<UserDto>{
        var user = Utils.readls(USERLS, true);
        return of(user);
    }

    isAuthenticated(): Observable<boolean>{
        var user = Utils.readls(USERLS, true);
        if(!user || !user.token || !user.id){//@todo: check token is jwt
            return of(false);    
        }
        return of(true);
    }
    
    doLogin(payload: UserLogin): Observable<UserLoginRespone> {

        // hard code for test permission grant
        // #beremoved
        var userAdmin: UserDto = {
            id: "1234354354656",
            role: ROLE_ADMIN,
            loginName: "admin@smartosc.com",
            fullName: "Hoang N.V",
            email: "admin@smartosc.com",
            dob: "11/03/1990",
            token: "adminheadadmin124zzz.middlexxxxxxxxx.endyyyyyyyy",
            avatar:"assets/images/hoangnv.jpg"
        }
        var userSupervisor: UserDto = {
            id: "6677777777",
            role: ROLE_SUPERVISOR,
            loginName: "supervisor@smartosc.com",
            fullName: "Supervisor Ms",
            email: "supervisor@smartosc.com",
            dob: "10/03/1994",
            token: "headtsfddddddddddd.middlexxxxxxxxx.endyyyyyyyy",
            avatar:"assets/images/cover2.jpg"
        }

        var result: UserLoginRespone = {
            userDto: null,
            code: 1,
            message: ''
        }

        if (payload) {
            /*call to BACKEND authenticate with steps:
                // 1. get raw of user profile
                // 2. parse raw user profile to UserDto
                // 3. return to LoginComponent or other consumer
            */

            // for test only
            if (payload.email == "admin@smartosc.com") {
                result.userDto = userAdmin;
                result.code = 0;
                result.message = "success - admin";
            } else if (payload.email == 'supervisor@smartosc.com') {
                result.userDto = userSupervisor;
                result.code = 0;
                result.message = "success with user role is supervisor";
            } else {
                result.code = 2;
                result.message = "Out of permission grant test";
            }
        } else {
            result.userDto = null;
            result.code = 1;
            result.message = "invalid input";
        }
        return of(result);
    }
}
