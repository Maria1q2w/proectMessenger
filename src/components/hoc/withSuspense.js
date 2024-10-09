import React, { Suspense } from 'react';
import Preloader from '../common/Preloader';

export const withSuspenseRedirect = (Component) => {
    return ((props) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    });
}