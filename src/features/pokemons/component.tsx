import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { LoadingScreen } from '@/features/loading-screen';
import { Title } from '@/components/title';
import { PokeApiList, PokemonsListItem } from '@/models/poke-api';

import { PokemonsListPagination } from './components/pokemons-list-pagination';
import { PokemonsList } from './components/pokemons-list';
import { config } from '@/utils/config';
import { useListPagination } from '@/hooks/use-list-pagination';

export const Pokemons: React.FC = () => {
    const history = useHistory();
    const { offset, limit, currPage } = useListPagination();

    const fetchPokemons = (offset = 0) =>
        fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        ).then((res) => res.json());

    const { data, isError, isFetching } = useQuery<
        PokeApiList<PokemonsListItem>
    >(['pokedex-browse', offset], () => fetchPokemons(offset), {
        keepPreviousData: true,
    });

    if (isError) {
        <Title>Something went wrong while fetching the Pokemson</Title>;
    }

    if (data) {
        const totalPages = Math.ceil(data.count / limit);

        // Don't want to show a blank screen
        if (currPage > totalPages) {
            history.push(config.routes.POKEDEX_POKEMONS);
        }

        return (
            <>
                <PokemonsList pokemonsList={data.results} />
                <PokemonsListPagination
                    page={currPage}
                    count={Math.ceil(data.count / limit)}
                    disabled={isFetching}
                />
            </>
        );
    }

    return <LoadingScreen />;
};
