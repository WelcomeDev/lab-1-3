import clsx from 'clsx';
import s from './video.module.scss';

export interface VideoProps {
    controls?: boolean;
    autoPlay?: boolean;
    src: string | string[];
    title?: string;
    poster: string;
    className?: string;
    muted?: boolean;
}

export function getExtension(input: string) {
    const dotIndex = input.lastIndexOf('.');
    if (dotIndex === -1) return '';

    return input.slice(dotIndex + 1);
}

export function Video(props: VideoProps) {
    const { autoPlay, controls, className, poster, src, title, muted } = props;
    const videoSource = (typeof src === 'string' ? [ src ] : src).map(it => ({ src: it, type: `video/${getExtension(it)}` }));
    return (
        <div className={s['container']}>
            <video
                className={clsx(className, s['video'])}
                autoPlay={autoPlay === undefined ? false : autoPlay}
                controls={controls === undefined ? true : controls}
                muted={muted === undefined ? true : muted}
                poster={poster}
                title={title}
            >
                {
                    videoSource.map((it) => (
                        <source key={it.type} src={it.src} type={it.type}/>
                    ))
                }
            </video>
        </div>
    );
}
