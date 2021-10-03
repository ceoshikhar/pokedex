import React from 'react';

import { PokemonsResultItem } from '@/models/poke-api';
import { PaginationList } from '@/components/pagination-list';

import { PokemonsCard } from '@/features/pokemon-card';

interface Props {
    pokemonsList: PokemonsResultItem[];
}

export const PokemonsList: React.FC<Props> = ({ pokemonsList }: Props) => {
    const items = pokemonsList.map((pokemon) => (
        <PokemonsCard name={pokemon.name} apiUrl={pokemon.url} />
    ));

    return <PaginationList items={items} />;
};
