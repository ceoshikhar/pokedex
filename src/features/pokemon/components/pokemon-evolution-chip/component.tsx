import React from 'react';
import { Chip } from '@mui/material';
import { ChipProps } from '@mui/material/Chip';
import { useTheme } from 'styled-components';

interface Props extends ChipProps {
    evolutionIdx: number;
}

export const PokemonEvolutionChip: React.FC<Props> = ({
    evolutionIdx,
    ...props
}: Props) => {
    const theme = useTheme();

    return (
        <Chip
            label={evolutionIdx}
            size="medium"
            sx={{ color: theme.color.brightBlue }}
            {...props}
        />
    );
};
