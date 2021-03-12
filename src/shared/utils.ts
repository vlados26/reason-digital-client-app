import { IServerConfiguration } from './interfaces/transport-layer.interfaces';

export const config: IServerConfiguration = {
    baseURL: 'http://localhost:8080',
    timeout: 100000,
    headers: {},
};

export const getDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
};
