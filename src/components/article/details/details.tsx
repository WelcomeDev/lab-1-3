import { ReactNode } from 'react';

export interface DetailsProps {
    summary: string;
    children: ReactNode;
}

export function Details() {
    return (
        <div role={'details'}>

        </div>
    );
}
