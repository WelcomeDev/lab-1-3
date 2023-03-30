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
import { Video } from './video/video';
import { CollapsableSection } from '../collabsableSection/collapsableSection';
import { BlogItemModel } from '../../data/blogList';
import { ProjectWithDescription } from '../project/projectWithDescription/projectWithDescription';
import { SeparationLine } from '../project/separationLine/separationLine';
import { ShareLink, ShareTelegram, ShareVk } from './share/share';

const components: MDXComponents = {
    Note,
    Video,
    CollapsableSection,
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
    details: ({ children }) => {
        return <>{children}</>;
    },
};

export interface PostProps {
    mdxSource: any;
    blogMeta: Omit<BlogItemModel, 'content'>;
}

export function Post({ mdxSource, blogMeta }: PostProps) {
    return (
        <div className={s['post']}>
           {/* todo: это нужно вынести в отдельный компонент. img и video нужно оборачивать в div, чтобы был border-radius*/}
           <div className={s['image-wrapper']}>
               <img
                   className={s['post__image']}
                   src={blogMeta.coverUrl}
                   alt={blogMeta.title}
               />
           </div>
            <div className={s['post__body']}>
                <aside className={s['post__aside']}>
                    <ProjectWithDescription
                        {...blogMeta.project}
                    />
                    <p className={'blog-caption--ternary'}>
                        {blogMeta.project.longDescription}
                    </p>
                    <SeparationLine/>
                    <p className={'blog-caption--secondary'}>
                        Share this article:
                    </p>
                    <div className={s['post__share-list']}>
                        <ShareTelegram/>
                        <ShareVk/>
                        <ShareLink/>
                    </div>
                </aside>
                <section className={s['post__article-wrapper']}>
                    <header className={s['post__header']}>
                        <Heading1>
                            {blogMeta.title}
                        </Heading1>
                        <Paragraph>
                            {blogMeta.description}
                        </Paragraph>
                    </header>
                    <article className={s['post__content']}>
                        <MDXRemote {...mdxSource} components={components}/>
                    </article>
                </section>
            </div>
        </div>
    );
}
