import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExceptionComponent } from './exception.component';
import { ExceptionRoutingModule } from './exception-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ExceptionRoutingModule
  ],
  declarations: [    
    NotFoundComponent,
    ExceptionComponent,
  ],
})
export class ExceptionModule { }
