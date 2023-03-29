import s from './img.module.scss';
import { Caption } from '../texts/texts';
import clsx from 'clsx';

export interface ImgProps {
    src: string;
    alt?: string;
}

export function Img({ src, alt }: ImgProps) {
    return (
        <div className={s['container']}>
            <img className={s['image']} src={src} alt={alt}/>
            {
                alt &&
                <Caption
                    className={clsx(s['image__caption'], 'blog-caption--secondary')}
                    children={alt}
                />
            }
        </div>
    );
}
