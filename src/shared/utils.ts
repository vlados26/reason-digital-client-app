import { IServerConfiguration } from './interfaces/transport-layer.interfaces';

export const config: IServerConfiguration = {
    baseURL: 'http://127.0.0.1:3337',
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
