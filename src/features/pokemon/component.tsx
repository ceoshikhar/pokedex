import React from 'react';
import { useQuery } from 'react-query';
import { useRouteMatch } from 'react-router-dom';

import { Title } from '@/components/title';
import { config } from '@/utils/config';
import { LoadingScreen } from '@/features/loading-screen';
import { Pokemon as IPokemon } from '@/models/pokemon';
import { useDocumentTitle } from '@/hooks/use-document-title';
import { upperCaseFirstLetter } from '@/utils/index';

import { PokemonCard } from './components/pokemon-card';
import { PokemonSearch } from './components/pokemon-search/component';

export const Pokemon: React.FC = () => {
    const match = useRouteMatch<{ name: string }>(
        config.routes.POKEMON_WITH_NAME_MATCH
    );
    const pokemonName = match?.params.name || '';

    useDocumentTitle(upperCaseFirstLetter(pokemonName) || 'Pokémon');

    // Same query key is used in `PokemonCard` for caching
    const fetchPokemon = (name: string) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
            res.json()
        );

    const { data, isError, isLoading, isFetching } = useQuery<IPokemon | null>(
        `pokemon-${pokemonName}`,
        () => {
            return pokemonName ? fetchPokemon(pokemonName) : null;
        }
    );

    return (
        <>
            <Title>Pokémon</Title>
            <PokemonSearch />
            {(isLoading || isFetching) && <LoadingScreen />}
            {isError && (
                <Title
                    style={{ textAlign: 'center' }}
                >{`No Pokémon found with the name "${pokemonName}"`}</Title>
            )}
            {data && !isFetching && <PokemonCard pokemon={data} />}
        </>
    );
};
