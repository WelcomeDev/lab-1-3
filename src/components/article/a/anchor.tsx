import { ReactNode } from 'react';
import s from './anchor.module.scss';
import clsx from 'clsx';

export interface AnchorProps {
    href: string;
    children: ReactNode;
}

export function Anchor({ href, children }: AnchorProps) {
    return (
        <a
            className={clsx(s['anchor'], 'blog-body--accent')}
            href={href}
        >
            {children}
        </a>
    );
}
