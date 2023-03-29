import { CSSProperties } from 'react';

export function getErrorStyles(error: string | JSX.Element | undefined, reserveSpaceForError: boolean | undefined): CSSProperties {
    return !error
        ? reserveSpaceForError
            ? { visibility: 'hidden' }
            : { display: 'none' }
        : {};
}
