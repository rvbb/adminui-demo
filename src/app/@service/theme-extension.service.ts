/**
 * extend and customize default theme
 * Created by Hoang N.V, 16 Oct 2019.
 **/

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ThemeExtensionService {
    constructor(private translate:TranslateService){}

    changeLanguage(code:string){
        this.translate.use(code);        
    }

}