import { createContext, ReactNode, useContext, useState } from 'react';

export interface UseThemeContext {
    theme: 'dark' | 'light';

    toggle(): void;
}

const themeContext = createContext({} as UseThemeContext);

function onThrow(message?: string): never {
    throw new Error('');
}

export const useThemeContext = () => useContext(themeContext) ?? onThrow();


export function ThemeContextProvider({ children }: { children: ReactNode }) {

    const [ theme, setTheme ] = useState<UseThemeContext['theme']>('dark');

    function toggle() {
        setTheme(value => value === 'dark' ? 'light' : 'dark');
    }

    return (
        <themeContext.Provider value={{
            theme, toggle,
        }}>
            {children}
        </themeContext.Provider>
    );
}
