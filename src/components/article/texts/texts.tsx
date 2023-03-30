import clsx from 'clsx';
import s from './text.module.scss';
import { TextProps } from '../textProps';
import { ReactNode } from 'react';
import { CollapsableSection } from '../../collabsableSection/collapsableSection';

export const Heading1 = ({ children, className }: TextProps) => (
    <h1 className={clsx(s['heading-1'], 'blog-h1', className)}>
        {children}
    </h1>
);

export const Heading2 = ({ children, className }: TextProps) => (
    <h2 className={clsx(s['heading-2'], 'blog-h2', className)}>
        {children}
    </h2>
);

export function Heading3({ children, className }: TextProps) {
    return (
        <h3 className={clsx(s['heading-3'], 'blog-h3', className)}>
            {children}
        </h3>
    );
}

export function Heading4({ children, className }: TextProps) {
    return (
        <h4 className={clsx(s['heading-4'], 'blog-h4', className)}>
            {children}
        </h4>
    );
}

export function Paragraph({ children, className }: TextProps) {
    return (
        <p className={clsx(s['paragraph'], 'blog-body', className)}>
            {children}
        </p>
    );
}

export function Caption({ children, className }: TextProps) {
    return (
        <p className={clsx(s['caption'], 'blog-caption', className)}>
            {children}
        </p>
    );
}

export function Marker({ children, className }: TextProps) {
    return (
        <code className={clsx(s['marker'], 'blog-body--secondary', className)}>
            {children}
        </code>
    );
}

export function CodeBlock({ language, children }: { children: ReactNode, language?: string }) {
    return (
        language ? (
                <code className={clsx(s['code-block'], 'blog-body--secondary', language)}>
                    <CollapsableSection label={language}>
                        {<pre>{children}</pre>}
                    </CollapsableSection>
                </code>
            )
            : (
                <div className={s['code-block__wrapper']}>
                    <code className={clsx(s['code-block'], s['code-block--no-collapse'], 'blog-body--secondary', language)}>
                        {<pre>{children}</pre>}
                    </code>
                </div>
            )
    );
}
