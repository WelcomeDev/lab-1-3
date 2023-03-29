import { TextBox } from '../textBox/textBox';
import Search from '../../assets/search.svg';
import './searchInput.scss';
import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export type SearchInputProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

export function SearchInput({ onChange, value }: SearchInputProps) {
    return (
        <TextBox
            leftIcon={<Search/>}
            className={clsx('search-input', 'desktop-body-1--secondary')}
            placeholder={'Поиск'}
            onChange={onChange}
            value={value}
        />
    );
}
