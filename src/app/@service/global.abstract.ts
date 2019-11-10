/**
 * Created by Hoang NV<hoangnv01@getMaxListeners.com> at 18 Oct 2019 
**/
import { NbMenuItem } from '@nebular/theme';

export declare abstract class XMenuItem extends NbMenuItem {
    translateKey?: string;
    children?: XMenuItem[];
    parent?: XMenuItem;
    // granted:boolean; 
    //consider use this and compare with permission-granter.servie.ts
    // This approach may not better, it may make performance go bad (???): need more loop algorithm to compare 'granted'.
}