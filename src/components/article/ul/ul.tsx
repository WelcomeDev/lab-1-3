import s from './ul.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

export function Ul({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <ul className={clsx('blog-body--primary', s['ul'], className)}>
            {children}
        </ul>
    );
}

export function Li({ children }: { children: ReactNode }) {
    return (
        <li className={s['li']}>
            {children}
        </li>
    );
}
