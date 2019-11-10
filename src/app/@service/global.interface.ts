export interface Language {
    code: string;
    des: String;
}

export interface UserDto {
    id: string,
    role: string,
    loginName: string,
    fullName: string,
    email: string,
    dob: string,
    token: string,
    avatar:string
}
export interface UserLogin {    
    email: string,
    password: string,
    rememberMe: boolean
}

export interface UserLoginRespone {    
    userDto: UserDto,
    code: Number,
    message: string
}
export interface ThemeLocalStorageDto {
    theme:string,
    language:string
}

export interface AuthToken{
    
}
