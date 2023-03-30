import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import breakPoints from '../styles/breakpoints.module.scss';
import { throwError } from '@ws-serenity/throw-error';

export interface CurrentPlatformContext {
    isCurrentPlatformMobile: boolean;
}

const currentPlatformContext = createContext<CurrentPlatformContext | null>(null);

export const useCurrentPlatformContext = () => useContext(currentPlatformContext)
    ?? throwError('useCurrentPlatform can be used only inside CurrentPlatformProvider');

const mobileMediaQuery = typeof window !== 'undefined'
    ? window.matchMedia(`(max-width: ${breakPoints.mobile}px)`)
    : null;

export function CurrentPlatformContextProvider({ children }: { children: ReactNode }) {

    const [ isCurrentPlatformMobile, setIsCurrentPlatformMobile ] = useState<boolean>(false);

    const evaluatePlatform = () => setIsCurrentPlatformMobile(!!mobileMediaQuery?.matches);

    useEffect(() => {
        mobileMediaQuery?.addEventListener('change', evaluatePlatform);
        evaluatePlatform();
        return () => mobileMediaQuery?.removeEventListener('change', evaluatePlatform);
    }, []);

    return (
        <currentPlatformContext.Provider
            value={{ isCurrentPlatformMobile }}
        >
            {children}
        </currentPlatformContext.Provider>
    );
}
