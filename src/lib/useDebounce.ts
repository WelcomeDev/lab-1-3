import { useCallback, useRef } from 'react';

/**
 * Дебанус-хук. «откладывает» вызов другой функции (callback) до того момента, когда с последнего вызова пройдёт определённое количество времени (delay)
 * @param callback функция вызова
 * @param delay задержка
 */
export function useDebounce<T>(callback: (value: T) => void, delay: number) {
    const timer = useRef<number>();

    return useCallback((value: T) => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            callback(value);
        }, delay);
    }, [callback, delay]);
}
