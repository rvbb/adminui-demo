import { OnDestroy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../@service/auth.service';
import { DEFAULT_LANGUAGE, THEMELS } from '../@service/global.constance';
import { TranslateService } from '@ngx-translate/core';
import { ThemeLocalStorageDto } from '../@service/global.interface';
import Utils from '../@service/global.util';

@Component({
  selector: 'vds-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss']
})
export class UserComponent implements OnDestroy, OnInit {

  subscription: any;
  authenticated: boolean;
  token: string;
  activedLang: string;

  constructor(private auth: AuthService, private location: Location, private translate: TranslateService) {
  }

  back() { }

  ngOnDestroy(): void {

  }

  chooseLanguage(lang: string = DEFAULT_LANGUAGE) {
    this.translate.setDefaultLang(lang);
    this.activedLang = lang;
  }

  ngOnInit() {
    var oldTheme: ThemeLocalStorageDto = Utils.readls(THEMELS, true);
    this.activedLang = oldTheme && oldTheme.language ? oldTheme.language : DEFAULT_LANGUAGE;
  }

}
