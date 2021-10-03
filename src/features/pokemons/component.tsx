import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { LoadingScreen } from '@/features/loading-screen';
import { Title } from '@/components/title';
import { PokeApiList, PokemonsResultItem } from '@/models/poke-api';
import { PaginationControl } from '@/components/pagination-control';
import { config } from '@/utils/config';
import { useListPagination } from '@/hooks/use-list-pagination';
import { PokemonCardPlaceholder } from '@/features/pokemon-card-placeholder';
import { PaginationList } from '@/components/pagination-list';

import { PokemonsList } from './components/pokemons-list';
import { PokemonsTypeNavigation } from './components/pokemons-type-navigation';

export const Pokemons: React.FC = () => {
    const history = useHistory();
    const { offset, limit, currPage } = useListPagination();

    const fetchAllPokemons = (offset = 0) =>
        fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        ).then((res) => res.json());

    const { data, isError, isFetching } = useQuery<
        PokeApiList<PokemonsResultItem>
    >(['pokedex-browse', offset], () => fetchAllPokemons(offset), {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });

    if (isError) {
        return <Title>Something went wrong while fetching the Pokemson</Title>;
    }

    // "Display a placeholder preview of your content before the data gets
    //  loaded to reduce load-time frustration." - @MUI Developers
    const items = Array(limit)
        .fill(0)
        .map(() => <PokemonCardPlaceholder />);

    if (data) {
        const totalPages = Math.ceil(data.count / limit);

        // Don't want to show a blank screen
        if (currPage > totalPages) {
            history.push(config.routes.POKEDEX_POKEMONS);
        }

        return (
            <>
                <PokemonsTypeNavigation />
                {isFetching ? (
                    <PaginationList items={items} />
                ) : (
                    <PokemonsList pokemonsList={data.results} />
                )}
                <PaginationControl
                    page={currPage}
                    count={Math.ceil(data.count / limit)}
                    disabled={isFetching}
                />
            </>
        );
    }

    return <LoadingScreen />;
};
