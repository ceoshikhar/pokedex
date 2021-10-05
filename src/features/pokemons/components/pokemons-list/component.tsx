import React from 'react';

import { PokemonsResultItem } from '@/models/poke-api';
import { PaginationList } from '@/components/pagination-list';

import { PokemonsListCard } from '../pokemons-list-card';

interface Props {
    pokemonsList?: PokemonsResultItem[];
    pokemonNames?: string[];
}

export const PokemonsList: React.FC<Props> = ({
    pokemonsList,
    pokemonNames,
}: Props) => {
    if (!pokemonsList && !pokemonNames) {
        console.error(
            `Please provide either "pokemonsList" or "pokemonNames" in PokemonsList`
        );
    }

    const items = pokemonsList
        ? pokemonsList.map((pokemon) => (
              <PokemonsListCard pokemonName={pokemon.name} />
          ))
        : pokemonNames
        ? pokemonNames.map((pokemonName) => (
              <PokemonsListCard pokemonName={pokemonName} />
          ))
        : null;

    if (items) {
        return <PaginationList items={items} />;
    }

    return null;
};
