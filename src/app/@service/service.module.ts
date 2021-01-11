import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { throwIfAlreadyLoaded } from '../@core/module-import-guard';
import { ThemeExtensionService } from './theme-extension.service';
import { PermissionGranterService } from './permission-granter.service';
import { AuthService } from './auth.service';

@NgModule({
    imports: [
      CommonModule,
    ],
    exports: [      
    ],
    declarations: [],
  })
  export class ServiceModule {
    constructor(@Optional() @SkipSelf() parentModule: ServiceModule) {
      throwIfAlreadyLoaded(parentModule, 'ServiceModule');
    }
  
    static forRoot(): ModuleWithProviders<ServiceModule> {
      return <ModuleWithProviders<ServiceModule>>{
        ngModule: ServiceModule,
        providers: [
          ThemeExtensionService, PermissionGranterService, AuthService
        ],
      };
    }
  }