import { ForwardedRef, forwardRef, InputHTMLAttributes, useId } from 'react';
import clsx from 'clsx';
import './textBox.scss';
import { BaseInputProps, ImportantProps } from './baseInputProps';
import { NO_BREAK_SPACE } from './utils/constants';
import { isTextError } from './utils/typeUtils';
import { getErrorStyles } from './utils/getErrorStyles';

type BaseTextBoxProps = {
        rightIcon?: JSX.Element;

        leftIcon?: JSX.Element;
    }
    & BaseInputProps;

export type TextBoxProps = BaseTextBoxProps & Pick<InputHTMLAttributes<HTMLInputElement>, ImportantProps> & {
    baseProps?: Omit<InputHTMLAttributes<HTMLInputElement>, ImportantProps>;
}

export const TextBox = forwardRef((props: TextBoxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
        leftIcon, rightIcon,
        label, topLabel,
        showRequired,
        error,
        reserveSpaceForError,
        baseProps,
        title, className, ...rest
    } = props;

    const id = useId();

    const errorStyles = getErrorStyles(error, reserveSpaceForError);

    return (
        <div
            className={clsx(
                'ws-text-box',
                className,
                {
                    'ws-text-box--top-label': topLabel,
                    'ws-text-box--has-icons': leftIcon || rightIcon,
                    'ws-text-box__field--error': !!error,
                },
            )}
            title={title}
        >
            <label
                htmlFor={id}
                className={'ws-text-box__label'}
            >
                {label}
                {
                    showRequired &&
                    <span
                        className={'ws-text-box__label--required'}
                    >
                        {' *'}
                    </span>
                }
            </label>
            {
                leftIcon || rightIcon
                    ? <div className={'ws-text-box__field-wrapper'}>
                        <label htmlFor={id}>{leftIcon}</label>
                        <input
                            ref={ref}
                            id={id}
                            className={'ws-text-box__field'}
                            {...rest}
                            {...baseProps}
                        />
                        {rightIcon}
                    </div>
                    : <input
                        ref={ref}
                        id={id}
                        className={'ws-text-box__field'}
                        {...rest}
                        {...baseProps}
                    />
            }
            {
                error
                    ? isTextError(error)
                        ? <p
                            className={'ws-text-box__error'}
                            style={errorStyles}
                        >
                            {error || NO_BREAK_SPACE}
                        </p>
                        : error
                    : null
            }
        </div>
    );
});
