import s from './separationLine.module.scss';
import clsx from 'clsx';

export function SeparationLine({ className }: { className?: string }) {
    return (
        <div className={clsx(className, s['separation-line'])}></div>
    );
}
