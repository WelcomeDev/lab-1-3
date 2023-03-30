import './textIcon.scss';
import clsx from 'clsx';
import { ReactSvg } from '../../typings/globals';
import { HTMLAttributes } from 'react';

interface TextIconProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    icon: ReactSvg;
    rotateIcon?: boolean;
}

export function TextIcon({ rotateIcon, className, label, icon: Icon, ...rest }: TextIconProps) {
    return (
        <div
            className={clsx('blog-body--accent', 'bold', 'text-icon', className)}
            {...rest}
        >
            <p>{label}</p>
            <Icon className={clsx('icon', rotateIcon && 'icon--rotated')}/>
        </div>
    );
}
