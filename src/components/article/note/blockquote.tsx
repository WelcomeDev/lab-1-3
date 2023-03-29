import { ReactNode } from 'react';
import clsx from 'clsx';
import s from './note.module.scss';

export interface BlockquoteProps {
    citeChildren: ReactNode;
    children: ReactNode;
}

export function Blockquote({ children, citeChildren }: BlockquoteProps) {
    return (
        <div className={s['blockquote__wrapper']}>
            <blockquote className={clsx(s['blockquote'], 'blog-body--secondary')}>
                <Cite>{citeChildren}</Cite>
                <p>
                    {children}
                </p>
            </blockquote>
        </div>
    );
}

export function Cite({ children }: { children: ReactNode }) {
    return (
        <cite className={clsx('blog-body--primary', 'bold')}>
            {children}
        </cite>
    );
}
