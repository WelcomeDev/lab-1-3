import { useCurrentPlatformContext } from './useCurrentPlatformContext';

/**
 * We assume that ShareApi is used only for mobile device
 */
export function useShareApiAvailable() {
    const { isCurrentPlatformMobile } = useCurrentPlatformContext();

    function isAvailable(data?: ShareData) {
        return isCurrentPlatformMobile
            && navigator.canShare
            && navigator.canShare(data);
    }

    return isAvailable;
}
