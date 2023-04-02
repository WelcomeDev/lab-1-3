import { FC, InputHTMLAttributes, useId } from 'react';
import './switch.scss';
import classNames from 'clsx';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    justify?: 'gap' | 'space-between';
}

export const Switch: FC<SwitchProps> = props => {

    const { label, className, justify = 'space-between', ...rest } = props;

    const switchID = useId();

    return (
        <div
            className={classNames(
                'switch-container',
                `switch-container--${justify}`,
                className,
            )}
        >
            <label
                className={classNames(
                    'switch-container__label',
                    'body-1',
                )}
                htmlFor={switchID}
            >
                {label}
            </label>
            <input
                className={'visually-hidden'}
                style={{display:'none'}}
                type={'checkbox'}
                id={switchID}
                {...rest}
            />
            <label
                className={'custom-switch-checkbox'}
                htmlFor={switchID}
            >
                <div></div>
            </label>
        </div>
    );
};
