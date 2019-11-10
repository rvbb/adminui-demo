import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import * as English from './../../assets/i18n/en.json';
import * as Vietnamese from './../../assets/i18n/vi.json';
import * as Chinese from './../../assets/i18n/ch.json';
import * as Laos from './../../assets/i18n/la.json';

const TRANSLATIONS = {
  en: English,
  vi: Vietnamese,
  ch: Chinese,
  la: Laos
};

//May not need in latest version of ngx-tranlate
export class XTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(TRANSLATIONS[lang].default);
  }
}