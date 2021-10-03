import React from 'react';
import { Skeleton, Stack } from '@mui/material';

export const PokemonCardPlaceholder: React.FC = () => {
    return (
        <>
            <Skeleton variant="rectangular" width={220} height={230} />
            <Skeleton variant="text" width={180} height={32} />
            <Stack direction="row" spacing={2}>
                <Skeleton variant="text" width={60} height={24} />
                <Skeleton variant="text" width={60} height={24} />
            </Stack>
        </>
    );
};
