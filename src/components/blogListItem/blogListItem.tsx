import { BlogListItemModel } from '../../data/blogList';
import { DAY_MONTH_YEAR } from '../../utils/dateFormats';
import s from './blogListItem.module.scss';
import { ProjectShort } from '../project/projectShort/projectShort';
import Link from 'next/link';

export type BlogListItemProps = BlogListItemModel

export function BlogListItem(props: BlogListItemProps) {

    const { title, project, coverUrl, publishedAt, description, slug } = props;

    return (
        <Link href={`/${slug}`}>
            <article className={s['blog-list-item']}>
                <img className={s['blog-list-item__cover']} src={coverUrl} alt={title}/>
                <h3 className={'blog-subtitle--primary'}>
                    {title}
                </h3>
                <p className={'blog-body--secondary'}>
                    {description}
                </p>
                <div className={s['blog-list-item__footer']}>
                    <ProjectShort {...project}/>
                    <time
                        dateTime={publishedAt.toString()}
                        className={'blog-caption--ternary'}
                    >
                        {publishedAt.format(DAY_MONTH_YEAR)}
                    </time>
                </div>
            </article>
        </Link>
    );
}
