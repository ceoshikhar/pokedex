import React from 'react';
import { Skeleton, Stack } from '@mui/material';

export const PokemonsListCardPlaceholder: React.FC = () => {
    return (
        <>
            <Skeleton variant="rectangular" width={210} height={215} />
            <Skeleton variant="text" width={180} height={32} />
            <Stack direction="row" spacing={4}>
                <Skeleton variant="text" width={60} height={24} />
                <Skeleton variant="text" width={60} height={24} />
            </Stack>
        </>
    );
};
