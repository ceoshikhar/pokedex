import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Title } from '@/components/title';
import { PokeApiList, PokemonsResultItem } from '@/models/poke-api';
import { config } from '@/utils/config';
import { useListPagination } from '@/hooks/use-list-pagination';
import { PaginationList } from '@/components/pagination-list';
import { PaginationControl } from '@/components/pagination-control';
import { useDocumentTitle } from '@/hooks/use-document-title';

import { PokemonsList } from '../pokemons-list';
import { PokemonsListCardPlaceholder } from '../pokemons-list-card-placeholder';

export const PokemonsListAll: React.FC = () => {
    useDocumentTitle('All Pokémons');
    const history = useHistory();
    const { offset, limit, currPage } = useListPagination();

    const fetchAllPokemons = (offset = 0) =>
        fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        ).then((res) => res.json());

    const { data, isError, isFetching } = useQuery<
        PokeApiList<PokemonsResultItem>
    >(['pokemons-all', offset], () => fetchAllPokemons(offset));

    if (isError) {
        return <Title>Something went wrong while fetching the Pokemson</Title>;
    }

    // "Display a placeholder preview of your content before the data gets
    //  loaded to reduce load-time frustration." - @MUI Developers
    const items = Array(limit)
        .fill(0)
        .map(() => <PokemonsListCardPlaceholder />);

    if (data) {
        const totalPages = Math.ceil(data.count / limit);

        // Don't want to show a blank screen
        if (currPage > totalPages) {
            history.push(config.routes.POKEDEX_POKEMONS);
        }

        return (
            <>
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

    return <PaginationList items={items} />;
};
