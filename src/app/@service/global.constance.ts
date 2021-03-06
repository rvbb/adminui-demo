
export const LANGUAGES:string[] = ['en', 'vi', 'la', 'ch', 'ar', 'fr'];//add more locale
export const LANGUAGE_CHANGE = [
    {
        code: 'vi',
        des: 'Tiếng Việt',
    },
    {
        code: 'en',
        des: 'English',
    },
    {
        code: 'ch',
        des: '中國人',
    },
    {
        code: 'la',
        des: 'ភាសាឡាវ',
    }
]

export const THEMES = [
    {
        value: 'default',
        name: 'Light',
    },
    {
        value: 'dark',
        name: 'Dark',
    },
    {
        value: 'sea',
        name: 'Sea',
    },
    {
        value: 'golden',
        name: 'Gold',
    }
];

export const DEFAULT_LANGUAGE:string = "en";//also need update matchLangFile() on app.component.ts
export const DEFAULT_THEME:string = "dark";

export const GOOGLEMAPAPI_KEY = "'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'";

//example of roles
export const ROLE_ADMIN="admin";
export const ROLE_SUPERVISOR="supervisor";
export const ROLE_STAFF="staff";

// localStorage
export const USERLS = "adminX-user";
export const THEMELS = "adminX-theme"; //need persionalize to each user (suppose one device used by multi users)
export const REMEMBERMELS = "adminX-rememberaccount"; //need persionalize to each user (suppose one device used by multi users)
//technical is easy: concatenate USER ID to localStorage key.

// 3rd APIs
export const API_BACKEND_URL = "http://localhost:20202/bank";


export const DEFAULT_PAGE = '/auth/login';