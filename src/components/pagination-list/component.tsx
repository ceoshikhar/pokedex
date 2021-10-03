import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

interface Props {
    items: JSX.Element[];
}

export const PaginationList: React.FC<Props> = ({ items }: Props) => {
    return (
        <ListContainer>
            <Grid container spacing={3}>
                {items.map((item, idx) => (
                    <Grid item key={idx} xs={12} sm={6} md={4} lg={3} xl={2}>
                        {item}
                    </Grid>
                ))}
            </Grid>
        </ListContainer>
    );
};

const ListContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto 2rem auto;
`;
