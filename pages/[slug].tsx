import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import * as fs from 'fs';
import path from 'path';
import { Post } from '../src/components/article/post';

export default function BlogPostPage({ mdxSource }: any) {
    return (
        <Post mdxSource={mdxSource}/>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync(path.join('content'));
    const paths = files.map(fileName => fileName.split('.')[0])
                       .map(slug => ({ params: { slug } }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const mdFile = fs.readFileSync(path.join('content', `${params?.slug}.md`));

    const { /*data: meta,*/ content } = matter(mdFile);

    const mdxSource = await serialize(content);

    return {
        props: {
            // meta,
            mdxSource,
        },
        revalidate: 10,
    };
};

