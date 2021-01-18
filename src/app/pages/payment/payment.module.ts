import { NgModule } from '@angular/core';
import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';
import { PaymentService } from './payment.service';
import { routingModule } from './routing.module';

@NgModule({
  imports: [
    routingModule
],
  declarations: [
    InternalComponent,
    ExternalComponent,
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule {
}
