import { FunctionComponent, SVGProps } from 'react';

declare module '*.svg' {
    const component: FunctionComponent<SVGProps<SVGElement>>;
    export default component;
}
