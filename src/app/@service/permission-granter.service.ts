/**
 * grant permission for each user via their role, example: admin, staff, supervisor, etc 
 * Created by Hoang N.V, 16 Oct 2019.
 **/

import { Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { XMenuItem } from './global.abstract';
import { NbRoleProvider } from '@nebular/security';
import { UserDto } from './global.interface';
import { ROLE_SUPERVISOR, ROLE_ADMIN, ROLE_STAFF } from './global.constance';

@Injectable()
export class PermissionGranterService {

    //default theme menu. Will be removed in real project
    MENU_ITEMS: NbMenuItem[] = [
        {
            title: 'E-commerce',
            icon: 'shopping-cart-outline',
            link: '/pages/dashboard',
            home: true,
        },
        {
            title: 'IoT Dashboard',
            icon: 'home-outline',
            link: '/pages/iot-dashboard',
        },
        {
            title: 'FEATURES',
            group: true,
        },
        {
            title: 'Layout',
            icon: 'layout-outline',
            children: [
                {
                    title: 'Stepper',
                    link: '/pages/layout/stepper',
                },
                {
                    title: 'List',
                    link: '/pages/layout/list',
                },
                {
                    title: 'Infinite List',
                    link: '/pages/layout/infinite-list',
                },
                {
                    title: 'Accordion',
                    link: '/pages/layout/accordion',
                },
                {
                    title: 'Tabs',
                    pathMatch: 'prefix',
                    link: '/pages/layout/tabs',
                },
            ],
        },
        {
            title: 'Forms',
            icon: 'edit-2-outline',
            children: [
                {
                    title: 'Form Inputs',
                    link: '/pages/forms/inputs',
                },
                {
                    title: 'Form Layouts',
                    link: '/pages/forms/layouts',
                },
                {
                    title: 'Buttons',
                    link: '/pages/forms/buttons',
                },
                {
                    title: 'Datepicker',
                    link: '/pages/forms/datepicker',
                },
            ],
        },
        {
            title: 'UI Features',
            icon: 'keypad-outline',
            link: '/pages/ui-features',
            children: [
                {
                    title: 'Grid',
                    link: '/pages/ui-features/grid',
                },
                {
                    title: 'Icons',
                    link: '/pages/ui-features/icons',
                },
                {
                    title: 'Typography',
                    link: '/pages/ui-features/typography',
                },
                {
                    title: 'Animated Searches',
                    link: '/pages/ui-features/search-fields',
                },
            ],
        },
        {
            title: 'Modal & Overlays',
            icon: 'browser-outline',
            children: [
                {
                    title: 'Dialog',
                    link: '/pages/modal-overlays/dialog',
                },
                {
                    title: 'Window',
                    link: '/pages/modal-overlays/window',
                },
                {
                    title: 'Popover',
                    link: '/pages/modal-overlays/popover',
                },
                {
                    title: 'Toastr',
                    link: '/pages/modal-overlays/toastr',
                },
                {
                    title: 'Tooltip',
                    link: '/pages/modal-overlays/tooltip',
                },
            ],
        },
        {
            title: 'Extra Components',
            icon: 'message-circle-outline',
            children: [
                {
                    title: 'Calendar',
                    link: '/pages/extra-components/calendar',
                },
                {
                    title: 'Progress Bar',
                    link: '/pages/extra-components/progress-bar',
                },
                {
                    title: 'Spinner',
                    link: '/pages/extra-components/spinner',
                },
                {
                    title: 'Alert',
                    link: '/pages/extra-components/alert',
                },
                {
                    title: 'Calendar Kit',
                    link: '/pages/extra-components/calendar-kit',
                },
                {
                    title: 'Chat',
                    link: '/pages/extra-components/chat',
                },
            ],
        },
        {
            title: 'Maps',
            icon: 'map-outline',
            children: [
                {
                    title: 'Google Maps',
                    link: '/pages/maps/gmaps',
                },
                {
                    title: 'Leaflet Maps',
                    link: '/pages/maps/leaflet',
                },
                {
                    title: 'Bubble Maps',
                    link: '/pages/maps/bubble',
                },
                {
                    title: 'Search Maps',
                    link: '/pages/maps/searchmap',
                },
            ],
        },
        {
            title: 'Charts',
            icon: 'pie-chart-outline',
            children: [
                {
                    title: 'Echarts',
                    link: '/pages/charts/echarts',
                },
                {
                    title: 'Charts.js',
                    link: '/pages/charts/chartjs',
                },
                {
                    title: 'D3',
                    link: '/pages/charts/d3',
                },
            ],
        },
        {
            title: 'Editors',
            icon: 'text-outline',
            children: [
                {
                    title: 'TinyMCE',
                    link: '/pages/editors/tinymce',
                },
                {
                    title: 'CKEditor',
                    link: '/pages/editors/ckeditor',
                },
            ],
        },
        {
            title: 'Tables & Data',
            icon: 'grid-outline',
            children: [
                {
                    title: 'Smart Table',
                    link: '/pages/tables/smart-table',
                },
                {
                    title: 'Tree Grid',
                    link: '/pages/tables/tree-grid',
                },
            ],
        },
        {
            title: 'Miscellaneous',
            icon: 'shuffle-2-outline',
            children: [
                {
                    title: '404',
                    link: '/pages/miscellaneous/404',
                },
            ],
        },
        {
            title: 'Auth',
            icon: 'lock-outline',
            children: [
                {
                    title: 'Login',
                    link: '/auth/login',
                },
                {
                    title: 'Register',
                    link: '/auth/register',
                },
                {
                    title: 'Request Password',
                    link: '/auth/request-password',
                },
                {
                    title: 'Reset Password',
                    link: '/auth/reset-password',
                },
            ],
        },
    ];

    /**
     * each role has corresponding menu items
     **/
    MENU_ITEMS_STAFF: XMenuItem[];
    MENU_ITEMS_XXXXROLE: XMenuItem[];
    MENU_ITEMS_SUPERVISOR: XMenuItem[] = [
        {
            title: 'Thống kê',
            translateKey:"dashboard",
            icon: 'shopping-cart-outline',
            link: '/pages/dashboard',
            home: true,
        },
        {
            title: 'Thanh Toán',
            translateKey:"payment",
            icon: 'credit-card-outline',
            children: [
                {
                    title: 'Chuyển tiền nội bộ',
                    translateKey:"paymenta",
                    link: '/pages/editors/tinymce'                    
                },
                {
                    title: 'Chuyển tiền liên ngân hàng',
                    translateKey:"paymentb",
                    link: '/pages/editors/ckeditor',
                },
            ],
        }
    ];
    MENU_ITEMS_ADMIN: XMenuItem[] = [
        {
            title: 'Thống kê',
            icon: 'home-outline',
            link: '/pages/iot-dashboard',
            home: true,
            translateKey:"dashboard"
        },
        {
            title: 'cobo',
            translateKey:"payment",
            icon: 'credit-card-outline',
            children: [
                {
                    title: 'Chuyển tiền nội bộ',
                    translateKey:"paymenta",
                    link: '/pages/editors/tinymce',
                },
                {
                    title: 'Chuyển tiền liên ngân hàng',
                    translateKey:"paymentb",
                    link: '/pages/editors/ckeditor',
                },
            ],
        },
        {
            title: 'COBO',
            translateKey: 'cobo',
            icon: 'globe-2-outline',
            children: [
                {
                    title: 'COBO A',
                    translateKey: 'coboa',
                    link: '/pages/modal-overlays/dialog',
                },
                {
                    title: 'COBO B',
                    translateKey: 'cobob',
                    link: '/pages/modal-overlays/window',
                }
            ],
        },
        {
            title: 'Report',
            icon: 'pie-chart-outline',
            link: '/pages/dashboard',            
            translateKey:"report"
        },
    ];

    
    constructor() {
     
    }

    /** grant permission & localization menu items **/
    getGrantedMenu(role:string): XMenuItem[] {
        var menu = null;        
        if(role == ROLE_ADMIN){
            menu = this.MENU_ITEMS_ADMIN;
        }else if(role == ROLE_SUPERVISOR){
            menu = this.MENU_ITEMS_SUPERVISOR;
        }else if(role == ROLE_STAFF){
            menu = this.MENU_ITEMS_STAFF;
        }        
        return menu;
    }
}