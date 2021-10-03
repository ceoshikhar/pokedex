import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useSearchParams } from '@/hooks/use-search-params';
import { LoadingScreen } from '@/features/loading-screen';
import { Title } from '@/components/title';
import { PokeApiList, PokemonsListItem } from '@/models/poke-api';

import { PokemonsListPagination } from './components/pokemons-list-pagination';
import { PokemonsList } from './components/pokemons-list';

// No of Pokemons to show on a page
const limit = 12;

export const Pokemons: React.FC = () => {
    const history = useHistory();
    const pageSearchParam = useSearchParams('page');

    const currPageNum = pageSearchParam ? parseInt(pageSearchParam) : 1;
    // offset should start from page 2.
    // That' means on page 1, the offset should be 0.
    const offset = currPageNum * limit - limit;

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
        if (currPageNum > totalPages) {
            history.push('/pokedex/pokemons');
        }

        return (
            <>
                <PokemonsList pokemonsList={data.results} />
                <PokemonsListPagination
                    page={currPageNum}
                    count={Math.ceil(data.count / limit)}
                    disabled={isFetching}
                />
                {isFetching && <span> Loading...</span>}
            </>
        );
    }

    return <LoadingScreen />;
};
