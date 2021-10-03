import React from 'react';
import styled from 'styled-components';
import { Pagination } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { config } from '@/utils/config';

interface Props {
    count: number;
    disabled: boolean;
    page: number;
}

export const PokemonsListPagination: React.FC<Props> = ({
    count,
    disabled,
    page,
}: Props) => {
    const history = useHistory();

    const changePage = (_: any, page: number) => {
        // `page` is null when clicked somewhere invalid on the component.
        // example the `...` will trigger this function with page = null
        if (page) {
            if (page === 1) {
                history.push(config.routes.POKEDEX_POKEMONS);
            } else {
                // We don't want to show `?page=0`
                history.push({ search: `?page=${page}` });
            }
        }
    };

    return (
        <PaginationContainer>
            <Pagination
                count={count}
                page={page}
                onChange={changePage}
                variant="outlined"
                color="primary"
                disabled={disabled}
            />
        </PaginationContainer>
    );
};

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;
