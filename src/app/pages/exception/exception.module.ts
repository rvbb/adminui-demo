import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExceptionComponent } from './exception.component';
import { ExceptionRoutingModule } from './exception-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    ExceptionRoutingModule,
    TranslateModule// @TODO:need to improve to import one time in root module
  ],
  declarations: [    
    NotFoundComponent,
    ExceptionComponent,
  ],
})
export class ExceptionModule { }
