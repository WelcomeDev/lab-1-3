import s from './header.module.scss';
import clsx from 'clsx';
import { Switch } from '../switch/switch';
import { useThemeContext } from '../../hooks/useThemeContext';

const links: { title: string, url: string }[] = [
    {
        title: 'ViteJs',
        url: 'https://vitejs.dev',
    },
    {
        title: 'React',
        url: 'https://react.dev/',
    },
];

export function Header({ className }: { className?: string }) {

    const { toggle } = useThemeContext();

    return (
        <header className={clsx(s['header'], className)}>
            <a href="https://vitejs.dev" target="_blank">
                <img src={'vite.svg'} className="logo" alt="Vite logo"/>
            </a>
            <nav>
                <ul className={s['header__nav']}>
                    <Switch onClick={toggle}/>
                    {
                        links.map(it => (
                            <li key={it.url}>
                                <a href={it.url} className={'desktop-body-1--accent'}>
                                    {it.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}
