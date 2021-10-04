import React from 'react';
import { useQuery } from 'react-query';
import { useRouteMatch } from 'react-router-dom';

import { Title } from '@/components/title';
import { config } from '@/utils/config';
import { LoadingScreen } from '@/features/loading-screen';
import { Pokemon as IPokemon } from '@/models/pokemon';

import { PokemonCard } from './components/pokemon-card';

export const Pokemon: React.FC = () => {
    const match = useRouteMatch<{ name: string }>(
        config.routes.POKEMON_WITH_NAME_MATCH
    );
    const pokemonName = match?.params.name || '';

    // Same query key is used in `PokemonCard` for caching
    const fetchPokemon = (name: string) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
            res.json()
        );

    const { data, isError, isLoading } = useQuery<IPokemon>(
        `pokemon-${pokemonName}`,
        () => fetchPokemon(pokemonName)
    );

    // PokeApi returns 404 if no pokemon exists with `pokemonName`
    if (isError) {
        return (
            <Title>{`No Pokemon found with the name "${pokemonName}"`}</Title>
        );
    }

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (data) {
        return <PokemonCard pokemon={data} />;
    }

    return null;
};
