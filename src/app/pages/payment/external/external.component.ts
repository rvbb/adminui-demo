import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'ngx-external',
  styleUrls: ['./external.component.scss'],
  templateUrl: './external.component.html',
})
export class ExternalComponent {

  constructor(private payment: PaymentService) {
  }

}
