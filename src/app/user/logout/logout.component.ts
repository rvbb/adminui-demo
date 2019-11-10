import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../@service/auth.service';
import Utils from '../../@service/global.util';
import { USERLS, REMEMBERMELS, THEMELS, DEFAULT_PAGE } from '../../@service/global.constance';

@Component({
    selector: 'user-logout',
    template: `
        <div translate>user.logout</div>
    `,
    styleUrls: ['./../user.component.scss']
})
export class LogoutComponent implements OnInit {

    constructor(service: AuthService, private router: Router) {        
    }

    ngOnInit() {
        this.doLogout();
        this.router.navigateByUrl(DEFAULT_PAGE);
    }

    doLogout() {
        Utils.deletels(USERLS);
        Utils.deletels(REMEMBERMELS);
        // Utils.deletels(THEMELS);
    }
}
