import { Header } from './components/header/header';
import s from './app.module.scss';
import { BlogListItem } from './components/blogListItem/blogListItem';
import { SearchInput } from './components/searchInput/searchInput';
import { useOnSearch } from './hooks/useOnSearch';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogListItemModel } from './data/blogList';
import { getStaticProps } from '../pages';

function App({ postList }: InferGetStaticPropsType<typeof getStaticProps>) {

    const { items, onSearch, searchValue } = useOnSearch(postList);

    return (
        <div className={s['blog-index']}>
            <Header className={s['blog-index__header']}/>
            <main className={s['blog-index__body']}>
                <div className={s['blog-index__search']}>
                    <h1 className={'blog-h1--primary'}>Все статьи</h1>
                    <SearchInput
                        value={searchValue}
                        onChange={e => onSearch(e.target.value)}
                    />
                </div>
                <section className={s['blog-index__list']}>
                    {
                        items.map(it => <BlogListItem key={it.id} {...it}/>)
                    }
                </section>
            </main>
        </div>
    );
}

export default App;
