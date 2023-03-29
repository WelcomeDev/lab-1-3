import { TextBox } from '@ws-serenity/react-text-inputs';
import Search from '../../assets/search.svg';
import './searchInput.scss';
import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export type SearchInputProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

export function SearchInput({ onChange, value }: SearchInputProps) {
    return (
        <TextBox
            leftIcon={<Search/>}
            className={clsx('search-input', 'blog-body--secondary')}
            placeholder={'Поиск'}
            onChange={onChange}
            value={value}
        />
    );
}
