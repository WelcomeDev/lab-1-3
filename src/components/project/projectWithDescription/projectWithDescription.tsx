import s from './projectWithDescription.module.scss';
import { BlogItemModel } from '../../../data/blogList';
import clsx from 'clsx';

export type ProjectWithDescriptionProps = Omit<BlogItemModel['project'], 'longDescription'>;

export function ProjectWithDescription(props: ProjectWithDescriptionProps) {

    const { coverUrl, shortDescription, title } = props;

    return (
        <div className={s['project-with-description']}>
            <img
                src={coverUrl} alt={title}
                className={s['project-with-description__image']}
            />
            <div className={s['project-with-description__text']}>
                <p
                    className={clsx('blog-body--secondary', 'bold')}
                >
                    {title}
                </p>
                <p className={'blog-body--ternary'}>
                    {shortDescription}
                </p>
            </div>
        </div>
    );
}
