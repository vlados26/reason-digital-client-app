import { IServerConfiguration } from './interfaces/transport-layer.interfaces';

export const config: IServerConfiguration = {
    baseURL: 'https://romantic-banach-9e95dd.netlify.app',
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
