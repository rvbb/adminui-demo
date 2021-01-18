import { NbMenuService } from '@nebular/theme';
import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'ngx-internal',
  styleUrls: ['./internal.component.scss'],
  templateUrl: './internal.component.html'
})
export class InternalComponent {

  constructor(private payment: PaymentService) {
  }

}
