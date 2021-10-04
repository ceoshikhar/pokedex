import React from 'react';
import { Grid } from '@mui/material';

interface Props {
    items: JSX.Element[];
}

export const PaginationList: React.FC<Props> = ({ items }: Props) => {
    return (
        <Grid
            spacing={3}
            container
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'center' }}
            sx={{ mb: '2rem' }}
        >
            {items.map((item, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4} lg={3} xl={2}>
                    {item}
                </Grid>
            ))}
        </Grid>
    );
};
