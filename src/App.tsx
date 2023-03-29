import { Header } from './components/header/header';
import s from './app.module.scss';
import { BlogListItem } from './components/blogListItem/blogListItem';
import { SearchInput } from './components/searchInput/searchInput';
import { useOnSearch } from './hooks/useOnSearch';

function App() {

    const { items, onSearch, searchValue } = useOnSearch();

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
