export type BaseInputProps = {
    /**
     * подпись к инпуту
     */
    label?: string;
    /**
     * флаг для расположения подписи сверху
     */
    topLabel?: boolean;
    /**
     * отображать поле как обязательное (красная звездочка)
     */
    showRequired?: boolean;
} & ({
    error?: string;
    reserveSpaceForError?: boolean;
} | {
    error?: JSX.Element;
    reserveSpaceForError?: never;
})

// исключаются из свойства baseProps и включаются в свойства инпутов
// это необходимо для того, чтобы было проще ориентироваться в пропсах компонента
// и для упрощения совместимости с библиотеками управления формами
export type ImportantProps = 'className'
    | 'value' | 'onChange' | 'onBlur' | 'required' | 'disabled' | 'name'
    | 'title'
    | 'placeholder';
