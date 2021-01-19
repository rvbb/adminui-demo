/**
 * grant permission for each user via their role, example: admin, staff, supervisor, etc 
 * Created by Hoang N.V, 16 Oct 2019.
 **/
import { Injectable } from '@angular/core';
import { XMenuItem } from './global.abstract';
import { ROLE_SUPERVISOR, ROLE_ADMIN, ROLE_STAFF } from './global.constance';

@Injectable()
export class PermissionGranterService {
    /**
     * each role has corresponding menu items
     **/
    MENU_ITEMS_STAFF: XMenuItem[];
    MENU_ITEMS_XXXXROLE: XMenuItem[];
    MENU_ITEMS_SUPERVISOR: XMenuItem[] = [
        {
            title: 'Thống kê',
            translateKey: "dashboard",
            icon: 'shopping-cart-outline',
            link: '/pages/dashboard',
            home: true,
        },
        {
            title: 'Thanh Toán',
            translateKey: "payment",
            icon: 'credit-card-outline',
            children: [
                {
                    title: 'Chuyển tiền nội bộ',
                    translateKey: "paymenta",
                    link: '/pages/payment/internal'
                },
                {
                    title: 'Chuyển tiền liên ngân hàng',
                    translateKey: "paymentb",
                    link: '/pages/payment/external',
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
            translateKey: "dashboard"
        },
        {
            title: 'payment',
            translateKey: "payment",
            icon: 'credit-card-outline',
            children: [
                {
                    title: 'Chuyển tiền nội bộ',
                    translateKey: "paymenta",
                    link: '/pages/payment/internal',
                },
                {
                    title: 'Chuyển tiền liên ngân hàng',
                    translateKey: "paymentb",
                    link: '/pages/payment/external',
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
                    link: '/pages/cobo',
                },
                {
                    title: 'COBO B',
                    translateKey: 'cobo',
                    link: '/pages/cobo',
                }
            ],
        },
        {
            title: 'POBO',
            translateKey: 'pobo',
            icon: 'globe-2-outline',
            link: '/pages/pobo',
        },
        {
            title: 'Report',
            icon: 'pie-chart-outline',
            link: '/pages/dashboard',
            translateKey: "report"
        },
    ];

    MENU_ITEMS_DEFAULT: XMenuItem[] = [
        {
            title: 'xx',
            icon: 'home-outline',
            link: '/user/register',
            home: true,
            translateKey: 'menu.user.register'
        }
    ];

    constructor() {

    }

    /** grant permission & localization menu items **/
    getGrantedMenu(role: string): XMenuItem[] {
        var menu = null;
        if (role == ROLE_ADMIN) {
            menu = this.MENU_ITEMS_ADMIN;
        } else if (role == ROLE_SUPERVISOR) {
            menu = this.MENU_ITEMS_SUPERVISOR;
        } else if (role == ROLE_STAFF) {
            menu = this.MENU_ITEMS_STAFF;
        }
        return menu;
    }
}