// All the things we care about Pokemon from the entire data fetched from PokeAPI
export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    sprites: PokemonSprites;
    abilities: Ability[];
    species: { name: string; url: string };
    stats: Stats[];
}

export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonSpecies {
    color: { name: string };
    egg_groups: { name: string; url: string }[];
    evolution_chain: { url: string };
}

export interface PokemonEvolution {
    id: number;
    chain: Chain;
}

export interface Chain {
    species: {
        name: string;
        url: string;
    };
    evolves_to: Chain[] | [];
}

interface PokemonSprites {
    front_default: string;
    other: {
        'official-artwork': {
            front_default: string;
        };
    };
}

interface Ability {
    is_hidden: boolean;
    ability: {
        name: string;
        url: string;
    };
}

interface Stats {
    base_stat: number;
    stat: { name: string };
}
