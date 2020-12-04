import { Component } from '@angular/core';
import { PermissionGranterService } from '../@service/permission-granter.service';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { XMenuItem } from '../@service/global.abstract';
import Utils from '../@service/global.util';
import { USERLS, DEFAULT_PAGE } from '../@service/global.constance';
import { Router } from '@angular/router';

@Component({
  selector: 'lmsadmin-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>      
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  permissionGranterSubs: Subscription;
  // #beremoved
  user: any = { };
  menu: XMenuItem[];

  constructor(private permissionGranterService: PermissionGranterService,
    private translate: TranslateService,
    private router: Router) {
  }

  ngOnInit() { 
    this.user = Utils.readls(USERLS, true);
    //@todo: re-verify user is authenticated or not? Need check with difference way.
    if (!this.user || !this.user.token) {
      this.router.navigateByUrl(DEFAULT_PAGE);
    } else {
      this.menu = this.permissionGranterService.getGrantedMenu(this.user.role);      
      this.translateMenu();
      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.translateMenu();
      });
    }
  }

  private translateMenu(): void {
    this.menu.forEach((XMenuItem: XMenuItem) => {
      this.translateMenuTitle(XMenuItem);
    });
  }

  private translateMenuTitle(XMenuItem: XMenuItem, prefix: string = ''): void {
    let key = '';
    try {
      key = (prefix !== '')
        ? PagesComponent.getXMenuItemKey(XMenuItem, prefix)
        : PagesComponent.getXMenuItemKey(XMenuItem);
    }
    catch (e) { return; }
    this.translate.get(key).subscribe((translation: string) => {
      XMenuItem.title = translation;
    });
    if (XMenuItem.children != null) {
      XMenuItem.children.forEach((childXMenuItem: XMenuItem) => {
        this.translateMenuTitle(childXMenuItem, PagesComponent.trimLastSelector(key));
      });
    }
  }
  private static getXMenuItemKey(XMenuItem: XMenuItem, prefix: string = 'menu'): string {
    if (XMenuItem.translateKey == null) {
      throw new Error('"translateKey" is missed. Check and declare it.');
    }

    const key = XMenuItem.translateKey.toLowerCase();
    if (XMenuItem.children != null) {
      return prefix + '.' + key + '.' + key;
    }
    return prefix + '.' + key;
  }

  private static trimLastSelector(key: string): string {
    const keyParts = key.split('.');
    keyParts.pop();
    return keyParts.join('.');
  }

}
