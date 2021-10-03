import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import { usePokemonType } from '@/hooks/use-pokemon-type';
import { PokemonsByTypeList, PokemonsResultItem } from '@/models/poke-api';
import { useListPagination } from '@/hooks/use-list-pagination';
import { config } from '@/utils/config';
import { PokemonCardPlaceholder } from '@/features/pokemon-card-placeholder';
import { PaginationList } from '@/components/pagination-list';
import { PaginationControl } from '@/components/pagination-control';

import { PokemonsList } from '../pokemons-list';
import { LoadingScreen } from '@/features/loading-screen';

export const PokemonsListByType: React.FC = () => {
    const history = useHistory();
    const type = usePokemonType();
    const { limit, currPage, offset } = useListPagination();

    console.log({ offset });

    const fetchPokemonsByType = (offset = 0) =>
        fetch(`https://pokeapi.co/api/v2/type/${type}`).then((res) =>
            res.json()
        );

    const { data, isFetching } = useQuery<PokemonsByTypeList>(
        `pokemons-type-${type}`,
        () => fetchPokemonsByType(),
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        }
    );

    const items = Array(limit)
        .fill(0)
        .map(() => <PokemonCardPlaceholder />);

    if (data) {
        const count = data.pokemon.length;
        // So that we can re-use `<PokemonsList>` component.
        const pokemonsList: PokemonsResultItem[] = data.pokemon.map(
            (pokemon) => ({
                name: pokemon.pokemon.name,
                url: pokemon.pokemon.url,
            })
        );

        const totalPages = Math.ceil(count / limit);

        if (currPage > totalPages) {
            history.push(`${config.routes.POKEDEX_POKEMONS_TYPE}/${type}`);
        }

        return (
            <>
                {isFetching ? (
                    <PaginationList items={items} />
                ) : (
                    <PokemonsList
                        // Unlike `PokemonsListAll`, we retrieve the list of
                        // all the pokemons at once instead of  pagination.
                        // This helps us emulate a `pagination` behavior without
                        // having to make extra API requests.
                        pokemonsList={pokemonsList.slice(
                            offset,
                            offset + limit
                        )}
                    />
                )}

                <PaginationControl
                    page={currPage}
                    count={Math.ceil(count / limit)}
                    disabled={isFetching}
                />
            </>
        );
    }

    return <LoadingScreen />;
};
