export interface PokeApiList<T = unknown> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface PokemonsResultItem {
    name: string;
    url: string;
}

export interface PokemonsTypeResultItem {
    name: string;
    url: string;
}
