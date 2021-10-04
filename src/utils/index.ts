import { Chain } from '@/models/pokemon';

export * from './config';

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

// Pokemon's evolution chain is nested.
// Starting Pokemon species -> evolves to -> Pokemon species -> until we reach
// the highest Pokemon species in the chain.
export function pokemonNamesFromChainInOrder(chain: Chain): string[] {
    if (chain.evolves_to.length === 0) {
        return [chain.species.name];
    }

    return [
        chain.species.name,
        ...pokemonNamesFromChainInOrder(chain.evolves_to[0]),
    ];
}
