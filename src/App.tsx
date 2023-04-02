import { Header } from './components/header/header';
import clsx from 'clsx';
import './styles/colors/blog.scss';
import s from './app.module.scss';
import { BlogListItem } from './components/blogListItem/blogListItem';
import { SearchInput } from './components/searchInput/searchInput';
import { useOnSearch } from './hooks/useOnSearch';
import { useThemeContext } from './hooks/useThemeContext';

function App() {

    const { items, onSearch, searchValue } = useOnSearch();
    const { theme } = useThemeContext();

    return (
        <div className={clsx(s['app-wrapper'], `${theme}-theme`)}>
            <Header className={s['app-wrapper__header']}/>
            <main className={s['app-wrapper__body']}>
                <div className={s['app-wrapper__search']}>
                    <h1 className={'desktop-h1--primary'}>Все статьи</h1>
                    <SearchInput
                        value={searchValue}
                        onChange={e => onSearch(e.target.value)}
                    />
                </div>
                <section className={s['app-wrapper__list']}>
                    {
                        items.map(it => <BlogListItem key={it.id} {...it}/>)
                    }
                </section>
            </main>
        </div>
    );
}

export default App;
