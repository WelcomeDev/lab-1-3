import '@ws-serenity/js-prototypes/lib/datePrototype';
import '@ws-serenity/js-prototypes/lib/stringPrototype';
import '../src/styles/fontsMap.scss';
import '../src/styles/reset.scss';
import '../src/styles/colors/blog.scss';
import { AppProps } from 'next/app';
import clsx from 'clsx';
import './appWrapper.scss';
import { CurrentPlatformContextProvider } from '../src/hooks/useCurrentPlatformContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CurrentPlatformContextProvider>
            <div className={clsx('theme', 'app-wrapper')}>
                <Component {...pageProps}/>
            </div>
        </CurrentPlatformContextProvider>
    );
}
