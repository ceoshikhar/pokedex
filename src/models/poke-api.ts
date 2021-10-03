export interface PokeApiList<T = unknown> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export interface PokemonsListItem {
    name: string;
    url: string;
}
