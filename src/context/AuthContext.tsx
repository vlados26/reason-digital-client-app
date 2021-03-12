import { createContext } from 'react';
import { IContextProps } from '../shared/interfaces/common';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    email: '',
    login: (token: string | undefined, email: string): void => {},
    logout: (): void => {},
} as IContextProps);
