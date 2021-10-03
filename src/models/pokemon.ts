// All the things we care about Pokemon from the entire data fetched from PokeAPI
export interface Pokemon {
    id: number;
    name: string;
    types: PokemonType[];
    sprites: PokemonSprites;
}

interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface PokemonSprites {
    front_default: string;
    other: {
        'official-artwork': {
            front_default: string;
        };
    };
}
