export enum AuthPageName {
    LOGIN = '/login',
    SIGNUP = '/signup',
}

export interface IAuthResponse {
    message: string;
    email: string;
    path?: string;
    token?: string | undefined;
}

export interface IRouteProps {
    component: any;
    isAuthenticated: boolean;
    path: string;
    exact: any;
}

export interface IContextProps {
    token: string | undefined;
    email: string;
    isAuthenticated: boolean;
    login(token: string | undefined, email: string): void;
    logout(): void;
}
