import s from './img.module.scss';
import { Caption } from '../texts/texts';
import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';

export interface ImgProps {
    src: string;
    alt: string;
}

export function Img({ src, alt }: ImgProps) {

    const imgRef = useRef<HTMLImageElement>(null);
    const [ isVertical, setIsVertical ] = useState(false);

    function findImageOrientation(e: Event) {
        const target = (e.target as HTMLImageElement);
        setIsVertical(target.naturalHeight > target.naturalWidth);
    }

    useLayoutEffect(() => {
        imgRef.current!.addEventListener('load', findImageOrientation);

        return () => imgRef.current!.removeEventListener('load', findImageOrientation);
    }, []);

    return (
        <div className={s['container']}>
            <Image
                ref={imgRef}
                className={clsx(s['image'], isVertical && s['image--vertical'])}
                src={src}
                alt={alt}
                width={700}
                height={370}
                // placeholder={'blur'}
                // blurDataURL={''}
            />
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
