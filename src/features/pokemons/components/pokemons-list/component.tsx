import React from 'react';

import { PokemonsResultItem } from '@/models/poke-api';
import { PaginationList } from '@/components/pagination-list';

import { PokemonsListCard } from '../pokemons-list-card';

interface Props {
    pokemonsList: PokemonsResultItem[];
}

export const PokemonsList: React.FC<Props> = ({ pokemonsList }: Props) => {
    const items = pokemonsList.map((pokemon) => (
        <PokemonsListCard pokemonName={pokemon.name} />
    ));

    return <PaginationList items={items} />;
};
