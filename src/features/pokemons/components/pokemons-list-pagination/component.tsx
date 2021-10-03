import React from 'react';
import styled from 'styled-components';
import { Pagination } from '@mui/material';

import { config } from '@/utils/config';
import { useListPagination } from '@/hooks/use-list-pagination';

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
    const { changePage } = useListPagination();

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
