export function upperCaseFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatPokemonId(num: number): string {
    if (num < 10) {
        return '00' + num;
    } else if (num < 100) {
        return '0' + num;
    }

    return num.toString();
}
