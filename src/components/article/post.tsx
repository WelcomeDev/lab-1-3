import { MDXRemote } from 'next-mdx-remote';
import { MDXComponents } from 'mdx/types';
import { CodeBlock, Heading1, Heading2, Heading3, Heading4, Marker, Paragraph } from './texts/texts';
import s from './post.module.scss';
import { Img } from './img/img';
import { Children, isValidElement, ReactNode } from 'react';
import { Li, Ul } from './ul/ul';
import { Note } from './note/note';
import { Blockquote, Cite } from './note/blockquote';
import { Anchor } from './a/anchor';

const components: MDXComponents = {
    Note,
    h1: ({ children }) => <Heading1>{children}</Heading1>,
    h2: ({ children }) => <Heading2>{children}</Heading2>,
    h3: ({ children }) => <Heading3>{children}</Heading3>,
    h4: ({ children }) => <Heading4>{children}</Heading4>,
    img: props => {
        // console.log('image', props);
        // @ts-ignore
        return <Img src={props.src} alt={props.alt}/>;
    },
    p: ({ children }) => {
        return typeof children === 'string'
            ? <Paragraph children={children}/>
            : <>{children}</>;
    },
    pre: ({ children }) => {
        const classNames = children ? Children.map(children, element => {
            if (!isValidElement(element)) return undefined;

            return element.props.className as string | undefined;
        }) : [];
        return <CodeBlock language={classNames?.[0]}>{children}</CodeBlock>;
    },
    code: ({ children }) => <Marker>{children}</Marker>,
    ul: ({ children }) => <Ul>{children}</Ul>,
    li: ({ children }) => <Li>{children}</Li>,
    blockquote: ({ children }) => {
        let citeChildren: ReactNode = null;

        const bodyChildren = Children.map(children, element => {
            if (!isValidElement(element)) return element;

            if (element.type === 'cite' && element.props.children) {
                citeChildren = element.props.children;
                return null;
            }

            return element;
        });

        return <Blockquote citeChildren={citeChildren}>{bodyChildren}</Blockquote>;
    },
    cite: ({ children }) => {
        console.log('render cite');
        return <Cite>{children}</Cite>;
    },
    a: ({ children, href }) => {
        // @ts-ignore
        return <Anchor href={href}>{children}</Anchor>;
    },
};

export function Post({ mdxSource }: { mdxSource: any }) {
    return (
        <div className={s['post']}>
            <section className={s['post__project']}>

            </section>
            <section className={s['post__article-wrapper']}>
                <header className={s['post__header']}>
                    <Heading1>
                        Почему вам не следует опасаться восстания машин... В ближайшие 10 лет
                    </Heading1>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
                        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                        amet.
                    </Paragraph>
                </header>
                <article className={s['post__content']}>
                    <MDXRemote {...mdxSource} components={components}/>
                </article>
            </section>
        </div>
    );
}
