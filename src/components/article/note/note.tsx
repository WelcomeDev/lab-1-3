import s from './note.module.scss';
import clsx from 'clsx';

export interface NoteProps {
    title?: string;
    body: string;
}

export function Note({ title, body }: NoteProps) {
    return (
        <div className={s['note']}>
            <h5 className={clsx('blog-body--accent', 'bold')}>{title ?? 'Важно'}</h5>
            <p className={'blog-body--primary'}>{body}</p>
        </div>
    );
}
