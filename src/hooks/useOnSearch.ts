import { useState } from 'react';
import { useDebounce } from '../lib/useDebounce';
import { blogList } from '../data/blogList';

console.log(blogList)

export function useOnSearch() {
    const [ searchValue, setSearchValue ] = useState('');

    const [ filteredItems, setFilteredItems ] = useState(blogList);

    const debounceSearch = useDebounce(listItems, 500);

    function listItems(searchString: string) {
        setFilteredItems(blogList.filter(it => it.title.contains(searchString, 'ignoreCase')));
    }

    function onSearch(value: string) {
        setSearchValue(value);
        console.log(value)
        debounceSearch(value);
    }

    return {
        items: filteredItems,
        searchValue,
        onSearch,
    };
}
