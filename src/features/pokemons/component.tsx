import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Pagination } from '@mui/material';

import { useSearchParams } from '@/hooks/use-search-params';
import { LoadingScreen } from '@/features/loading-screen';
import styled from 'styled-components';

// No of Pokemons to show on a page
const limit = 3;

export const Pokemons: React.FC = () => {
    const pageSearchParam = useSearchParams('page');
    const history = useHistory();

    const page = pageSearchParam ? parseInt(pageSearchParam) : 1;
    // offset should start from page 2.
    // That' means on page 1, the offset should be 0.
    const offset = page * limit - limit;

    const fetchPokemons = (offset = 0) =>
        fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        ).then(async (res) => {
            const data = await res.json();
            const hasNextPage = !!data.next;
            const hasPreviousPage = !!data.previous;
            const isInvalidPage = data.results.length === 0 ? true : false;

            return {
                data,
                hasNextPage,
                hasPreviousPage,
                isInvalidPage,
            };
        });

    const goToPage = (_: any, page: number) => {
        // `page` is null when clicked somewhere invalid on the component.
        // example the `...` will trigger this function with page = null
        if (page) {
            if (page === 1) {
                history.push('/pokedex/pokemons');
            } else {
                // We don't want to show `?page=0`
                history.push({ search: `?page=${page}` });
            }
        }
    };

    const { isError, error, data, isFetching } = useQuery(
        ['pokedex-browse', offset],
        () => fetchPokemons(offset),
        {
            keepPreviousData: true,
        }
    );

    if (isError) {
        <div>Error: {error}</div>;
    }

    if (data) {
        return (
            <>
                <pre>{JSON.stringify(data, null, 2)}</pre>
                <PaginationContainer>
                    <Pagination
                        count={Math.ceil(data.data.count / limit)}
                        page={page}
                        onChange={goToPage}
                        variant="outlined"
                        color="primary"
                        disabled={isFetching}
                    />
                </PaginationContainer>
                {isFetching ? <span> Loading...</span> : null}{' '}
            </>
        );
    }

    return <LoadingScreen />;
};

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;
