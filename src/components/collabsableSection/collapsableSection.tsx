import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import { TextIcon } from '../textIcon/textIcon';
import AngleUp from '../../assets/angle-up.svg';
import s from './collabsableSection.module.scss';
import clsx from 'clsx';

export interface CollapsableSectionProps {
    className?: string;
    label: string;
    children: ReactNode;
}

const scrollHeight = 30;

export function CollapsableSection({ children, className, label }: CollapsableSectionProps) {

    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ hasHorizontalScroll, setHorizontalScroll ] = useState(false);

    useLayoutEffect(() => {
        setIsOpen(contentRef.current!.scrollHeight < window.innerHeight);
        setHorizontalScroll(contentRef.current!.scrollWidth > containerRef.current!.clientWidth);
    }, []);

    return (
        <div
            className={clsx(s['collapsable-section'], className)}
            ref={containerRef}
        >
            {/*@ts-ignore*/}
            <TextIcon label={label} icon={AngleUp}
                      rotateIcon={!isOpen}
                      className={s['collapsable-section__summary']}
                      onClick={() => setIsOpen(value => !value)}
            />
            <div
                ref={contentRef}
                className={clsx(s['collapsable-section__body'], isOpen && s['collapsable-section__body--open'])}
                // @ts-ignore
                style={{ '--content-height': `${contentRef.current?.scrollHeight + (hasHorizontalScroll ? scrollHeight : 0)}px` }}
            >
                {children}
            </div>
        </div>
    );
}
