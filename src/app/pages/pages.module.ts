import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExceptionModule } from './exception/exception.module';
import { PaymentModule } from './payment/payment.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    TranslateModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    ExceptionModule,
    PaymentModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
