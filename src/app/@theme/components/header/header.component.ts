import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../@service/auth.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  userMenu = [
    {
      code: 'activity',
      title: 'Activity',
      translateKey: 'global.activity'
    },
    {
      code: 'profile',
      title: 'Profile',
      translateKey: 'global.profile'
    },
    {
      code: 'logout',
      title: 'Log out',
      translateKey: 'global.logout',
    }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private authService: AuthService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private router: Router,
    private translateService: TranslateService) {

    menuService.onItemClick()
      .subscribe(bag => {
        if (bag && bag.item["code"] == 'activity') {

        } else if (bag && bag.item["code"] == 'profile') {

        } else if (bag && bag.item["code"] == 'logout') {
          this.router.navigateByUrl('/auth/logout');
        }
      });
  }

  private translateAccountMenu() {
    this.userMenu.forEach((item) => {
      this.translateService.get(item.translateKey).subscribe((translatedText: string) => {
        item.title = translatedText;
      });
    });
  }

  ngOnInit() {
    this.authService.getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(logedUser => {
        this.user = logedUser;
      });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

      this.translateAccountMenu();
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.translateAccountMenu();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    // this.translateService.onLangChange.unsubscribe();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }
}
