import { BlogListItemModel } from '../../../data/blogList';
import s from './projectShort.module.scss'

export type ProjectShortProps = BlogListItemModel['project'];

export function ProjectShort(props: ProjectShortProps) {
    const { title, coverUrl } = props;

    return (
        <div className={s['project']}>
            <img
                className={s['project__icon']}
                src={coverUrl}
                alt={title}
            />
            <p className={'desktop-body-1--primary'}>
                {title}
            </p>
        </div>
    );
}
