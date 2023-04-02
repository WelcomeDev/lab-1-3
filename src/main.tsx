import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/fontsMap.scss';
import './styles/reset.scss';
import './lib/datePrototype';
import './lib/stringPrototype';
import { ThemeContextProvider } from './hooks/useThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
        .render(
            <React.StrictMode>
                <ThemeContextProvider>
                    <App/>
                </ThemeContextProvider>
            </React.StrictMode>,
        );
