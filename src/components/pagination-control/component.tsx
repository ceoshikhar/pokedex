import React from 'react';
import { Pagination as MUIPagination } from '@mui/material';
import styled from 'styled-components';

import { useListPagination } from '@/hooks/use-list-pagination';

interface Props {
    count: number;
    page: number;
    disabled?: boolean;
}

export const PaginationControl: React.FC<Props> = ({
    count,
    page,
    disabled = false,
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
