declare global {

    type StringComparisonOptions = 'strict' | 'ignoreCase';
    type FormatStringArgument = string | number;
    type FormatSearchValueArgument = RegExp | string | undefined;

    interface String {
        /**
         * Проверяет на вхождение строки в экземпляр
         * @param value
         * @param comparisonOption по умолчанию "strict"
         */
        contains(value: string, comparisonOption?: StringComparisonOptions): boolean;

        /**
         * Проверяет на равенство
         * @param value
         * @param comparisonOption default is 'strict'
         */
        equals(value: string, comparisonOption?: StringComparisonOptions): boolean;

        /**
         * Переводит первую букву в заглавную. Остальную часть оставляет как есть
         */
        uncapitalize(): string;

        /**
         * Переводит первую букву в строчную. Остальную часть оставляет как есть
         */
        capitalize(): string;

        /**
         * Форматирует строку
         * @param regex A string or RegExp value, default is '/%s/'
         * @param replaceValues
         */
        format(regex: FormatSearchValueArgument, ...replaceValues: FormatStringArgument[]): string;
    }
}

String.prototype.equals = function (value, comparisonOption) {
    comparisonOption = comparisonOption ?? 'strict';
    switch (comparisonOption) {
        case 'strict':
            return this === value;
        case 'ignoreCase':
            return this.toLowerCase() === value.toLowerCase();
        default:
            throw new Error(`Unknown comparison option: ${comparisonOption}`);
    }
};

String.prototype.contains = function (value, comparisonOption) {
    comparisonOption = comparisonOption ?? 'strict';
    switch (comparisonOption) {
        case 'strict':
            return this.includes(value);
        case 'ignoreCase':
            return this.toLowerCase().includes(value.toLowerCase());
        default:
            throw new Error(`Unknown comparison option: ${comparisonOption}`);
    }
};

String.prototype.capitalize = function (): string {
    if (this.length <= 1) return this.toUpperCase();
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.uncapitalize = function (): string {
    if (this.length <= 1) return this.toLowerCase();
    return this.charAt(0).toLowerCase() + this.slice(1);
};

String.prototype.format = function (searchValue = /%s/, ...args) {
    let res = this.toString();
    args.forEach(arg => res = res.replace(searchValue, String(arg)));
    return res;
};


export {};
