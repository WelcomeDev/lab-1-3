import App from '../src/App';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogListItemModel } from '../src/data/blogList';

export default function Index({ postList }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <App postList={postList}/>;
}

export const getStaticProps: GetStaticProps = async () => {

    const files = fs.readdirSync(path.join('content'));
    const postList = files.filter(it => it.endsWith('.md'))
                          .map(it => fs.readFileSync(path.join('content', it)))
                          .map(it => matter(it).data) as BlogListItemModel[];

    return {
        props: {
            postList,
        },
        revalidate: 10,
    };
};
