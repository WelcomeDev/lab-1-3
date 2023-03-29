import { format } from 'date-fns';
declare global {
    interface Date {
        /**
         * format instance using date-fns
         * @param pattern
         */
        format(pattern: string, locale?: Locale): string;

        /**
         * Копирует текущую дату
         */
        clone(): Date;
    }
}

Date.prototype.format = function (pattern: string, locale?: Locale): string {
    return format(this, pattern, { locale: locale });
};

Date.prototype.clone = function (): Date {
    return new Date(this.getTime());
};

export {};
