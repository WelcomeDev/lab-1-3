import { ReactSvg } from '../../../typings/globals';
import clsx from 'clsx';
import s from './share.module.scss';
import { copyLink, shareTelegram, shareVk } from '../../../utils/shareUtils';
import Telegram from '../../../assets/telegram.svg';
import Vk from '../../../assets/vk.svg';
import CopyAlt from '../../../assets/copy-alt.svg';

export type ShareProps = {
    onClick: () => void
    icon: ReactSvg;
    className?: string;
    title?: string;
}

export function Share({ onClick, icon: Icon, className, title }: ShareProps) {
    return (
        <div
            className={clsx(s['share-link'], className)}
            onClick={onClick}
            title={title}
        >
            {<Icon className={s['share-link__icon']}/>}
        </div>
    );
}

export function ShareTelegram() {
    return (
        <Share
            // @ts-ignore
            icon={Telegram}
            onClick={() => window.open(shareTelegram(window.location.href))}
        />
    );
}

export function ShareVk() {
    return (
        <Share
            // @ts-ignore
            icon={Vk}
            onClick={() => window.open(shareVk(window.location.href))}
        />
    );
}

export function ShareLink() {
    return (
        <Share
            // @ts-ignore
            icon={CopyAlt}
            onClick={() => copyLink(window.location.href)}
        />
    );
}

function resolveWindowLocation() {
    return typeof window === 'undefined' ? '' : window.location.href;
}
