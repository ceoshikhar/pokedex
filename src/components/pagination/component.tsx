import React from 'react';
import styled from 'styled-components';
import { Pagination as MUIPagination } from '@mui/material';

import { useListPagination } from '@/hooks/use-list-pagination';

interface Props {
    count: number;
    disabled: boolean;
    page: number;
}

export const Pagination: React.FC<Props> = ({
    count,
    disabled,
    page,
}: Props) => {
    const { changePage } = useListPagination();

    return (
        <Container>
            <MUIPagination
                count={count}
                page={page}
                onChange={changePage}
                variant="outlined"
                color="primary"
                disabled={disabled}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
`;
