import { useState } from 'react';
import { useDebounce } from '@ws-serenity/react-hooks';
import { BlogListItemModel } from '../data/blogList';

export function useOnSearch(data: BlogListItemModel[]) {
    const [ searchValue, setSearchValue ] = useState('');

    const [ filteredItems, setFilteredItems ] = useState(data);

    const debounceSearch = useDebounce(listItems, 500);

    function listItems(searchString: string) {
        setFilteredItems(data.filter(it => it.title.contains(searchString, 'ignoreCase')));
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
