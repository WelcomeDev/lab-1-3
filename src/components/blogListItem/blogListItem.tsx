import { BlogListItemModel } from '../../data/blogList';
import { DAY_MONTH_YEAR } from '../../utils/dateFormats';
import s from './blogListItem.module.scss';
import clsx from 'clsx';
import { ProjectShort } from '../project/projectShort/projectShort';

export type BlogListItemProps = BlogListItemModel

export function BlogListItem(props: BlogListItemProps) {

    const { title, project, coverUrl, publishedAt, description } = props;

    return (
        <article className={s['blog-list-item']}>
            <img className={s['blog-list-item__cover']} src={coverUrl} alt={title}/>
            <h3 className={'desktop-subtitle--primary'}>
                {title}
            </h3>
            <p className={'desktop-body-1--secondary'}>
                {description}
            </p>
            <div className={s['blog-list-item__footer']}>
                <ProjectShort {...project}/>
                <time
                    dateTime={publishedAt.toString()}
                    className={'mobile-body-1--ternary'}
                >
                    {publishedAt.format(DAY_MONTH_YEAR)}
                </time>
            </div>
        </article>
    );
}
