export function isTextError(error: string | JSX.Element): boolean {
    return typeof error === 'string';
}
