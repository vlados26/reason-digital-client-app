import { useState, useCallback, useEffect } from 'react';
import { STORAGE_NAME } from '../shared/constants';

export const useAuth = () => {
    const [token, setToken] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const login: any = useCallback((token: string, email: string) => {
        setToken(token);
        setEmail(email);

        localStorage.setItem(
            STORAGE_NAME,
            JSON.stringify({
                token,
                email,
            })
        );
    }, []);

    const logout = useCallback(() => {
        setToken('');
        localStorage.removeItem(STORAGE_NAME);
    }, []);

    useEffect(() => {
        const storageItem: any = localStorage.getItem(STORAGE_NAME);
        const data = JSON.parse(storageItem);
        if (data && data.token && data.email) {
            login(data.token, data.email);
        }
    }, [login]);

    return { login, logout, token, email };
};
