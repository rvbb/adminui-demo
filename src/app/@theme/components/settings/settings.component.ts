import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LANGUAGE_CHANGE, THEMES, DEFAULT_LANGUAGE, DEFAULT_THEME, THEMELS } from '../../../@service/global.constance';
import { ThemeLocalStorageDto } from '../../../@service/global.interface';
import Utils from '../../../@service/global.util';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-settings',
  styleUrls: ['./settings.component.scss'],
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  themes = THEMES;
  languages = LANGUAGE_CHANGE;

  currentTheme = DEFAULT_THEME;
  currentLanguage = DEFAULT_LANGUAGE;

  constructor(private themeService: NbThemeService,
              private translate:TranslateService) {
  }

  ngOnInit() {
    var oldTheme:ThemeLocalStorageDto = Utils.readls(THEMELS, true);
    if(oldTheme){
      if(oldTheme.theme){
        this.currentTheme = oldTheme.theme;
      }      
      if(oldTheme.language){
        this.currentLanguage = oldTheme.language
      }      
    }    

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => {
        this.currentTheme = themeName;
        this.updateThemeLS(null, themeName);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  switchLanguage(langCode: string) {
    this.translate.use(langCode);        
    this.updateThemeLS(langCode, null);
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
    this.updateThemeLS(null, themeName);
  }

  updateThemeLS(lang, theme){
    var oldTheme:ThemeLocalStorageDto = Utils.readls(THEMELS, true);
    Utils.deletels(THEMELS);
    var themeLS:ThemeLocalStorageDto = {
      language: lang?lang:(oldTheme && oldTheme.language?oldTheme.language:DEFAULT_LANGUAGE),
      theme: theme?theme:(oldTheme && oldTheme.theme?oldTheme.theme:DEFAULT_THEME)
    }
    Utils.writels(THEMELS, themeLS, true);
  }

  notyfyMe(){}

}