import React from 'react';
import { Spinner } from 'react-bootstrap';

interface ILoaderProps {
    size?: 'sm' | undefined;
    as?: 'span' | 'div';
    variant?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'light'
        | 'dark';
}

const Loader = ({ size, as, variant }: ILoaderProps) => {
    return (
        <Spinner
            as={as}
            animation='border'
            size={size || undefined}
            role='status'
            aria-hidden='true'
            variant={variant}
        />
    );
};

export default Loader;
