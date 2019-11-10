/**
 * @license
 * Copyright Viettel Digital Corps. All Rights Reserved - Not for commerce. Used inhouse of Viettel Digital.
 */
import { Component, OnInit, ElementRef } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE, THEMELS } from './@service/global.constance';
import LAOS from "./../assets/i18n/la.json";
import VIETNAMESE from "./../assets/i18n/vi.json";
import ENGLISH from "./../assets/i18n/en.json";
import CHINESE from "./../assets/i18n/ch.json";

import Utils from './@service/global.util';
import { ThemeLocalStorageDto } from './@service/global.interface';

@Component({
  selector: 'bankplus-web',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private _elementRef: ElementRef, private translate: TranslateService) {
    var oldTheme:ThemeLocalStorageDto = Utils.readls(THEMELS, true);
    var language = oldTheme && oldTheme.language?oldTheme.language:DEFAULT_LANGUAGE;
    translate.setTranslation(language, this.matchLangFile(language));
    translate.setDefaultLang(language);
  }

  ngOnInit(): void {
    // this.analytics.trackPageViews();
    this._elementRef.nativeElement.removeAttribute("ng-version");
  }

  matchLangFile(lang):Object{
    return lang=='en'?ENGLISH:(lang=='vi'?VIETNAMESE:(lang=='ch'?CHINESE:(lang=='la'?LAOS:VIETNAMESE)));
  }
}
