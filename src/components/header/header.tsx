import s from './header.module.scss';
import clsx from 'clsx';

const links: { title: string, url: string }[] = [
    {
        title: 'ViteJs',
        url: 'https://vitejs.dev',
    },
    {
        title: 'React',
        url: 'https://react.dev/'
    }
];

export function Header({ className }: { className?: string }) {
    return (
        <header className={clsx(s['header'], className)}>
            <a href="https://vitejs.dev" target="_blank">
                <img src={'vite.svg'} className="logo" alt="Vite logo"/>
            </a>
            <nav>
                <ul className={s['header__nav']}>
                    {
                        links.map(it => (
                            <li key={it.url}>
                                <a href={it.url} className={'blog-body--accent'}>
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
