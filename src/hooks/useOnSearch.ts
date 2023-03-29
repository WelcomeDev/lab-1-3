import { useState } from 'react';
import { useDebounce } from '@ws-serenity/react-hooks';
import { blogList } from '../data/blogList';

export function useOnSearch() {
    const [ searchValue, setSearchValue ] = useState('');

    const [ filteredItems, setFilteredItems ] = useState(blogList);

    const debounceSearch = useDebounce(listItems, 500);

    function listItems(searchString: string) {
        setFilteredItems(blogList.filter(it => it.title.contains(searchString, 'ignoreCase')));
    }

    function onSearch(value: string) {
        setSearchValue(value);
        debounceSearch(value);
    }

    return {
        items: filteredItems,
        searchValue,
        onSearch,
    };
}
