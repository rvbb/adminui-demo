import { XMenuItem } from './global.abstract';

export default class Utils {
    static readls(key: string, isJson: boolean = false) {
        try {
            return isJson ? JSON.parse(atob(localStorage.getItem(key))) : atob(localStorage.getItem(key));
        } catch (e) {
            // console.log("Error in reading localstorage: ", e);
            return null;
        }
    }

    static writels(key: string, obj: any, isJson: boolean = false) {
        try {
            isJson ? localStorage.setItem(key, btoa(JSON.stringify(obj))) : localStorage.setItem(key, btoa(obj));
        } catch (e) {
            // console.log("Error in writing localstorage: ", e);
        }
    }

    static deletels(key: string) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            // console.log("Error in removing localstorage: ", e);
        }
    }
    
//   private translateMenuTitle(XMenuItem: XMenuItem, prefix: string = ''): void {
//     let key = '';
//     try {
//       key = (prefix !== '')
//         ? Utils.getXMenuItemKey(XMenuItem, prefix)
//         : Utils.getXMenuItemKey(XMenuItem);
//     }
//     catch (e) { return; }
//     this.translate.get(key).subscribe((translation: string) => {
//       XMenuItem.title = translation;
//     });
//     if (XMenuItem.children != null) {
//       XMenuItem.children.forEach((childXMenuItem: XMenuItem) => {
//         this.translateMenuTitle(childXMenuItem, Utils.trimLastSelector(key));
//       });
//     }
//   }
//   private static getXMenuItemKey(XMenuItem: XMenuItem, prefix: string = 'menu'): string {
//     if (XMenuItem.translateKey == null) {
//       throw new Error('"translateKey" is missed. Check and declare it.');
//     }

//     const key = XMenuItem.translateKey.toLowerCase();
//     if (XMenuItem.children != null) {
//       return prefix + '.' + key + '.' + key;
//     }
//     return prefix + '.' + key;
//   }

//   private static trimLastSelector(key: string): string {
//     const keyParts = key.split('.');
//     keyParts.pop();
//     return keyParts.join('.');
//   }
}