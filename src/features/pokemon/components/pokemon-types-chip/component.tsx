import React from 'react';
import { Chip, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { config } from '@/utils/config';

import { PokemonType } from '@/models/pokemon';

interface Props {
    types: PokemonType[];
}

export const PokemonTypesChip: React.FC<Props> = ({ types }: Props) => {
    const history = useHistory();

    return (
        <Stack direction="row" spacing={1}>
            {types.map((type, idx) => {
                return (
                    <Chip
                        key={idx}
                        label={type.type.name}
                        size="small"
                        clickable
                        onClick={(event) => {
                            event.stopPropagation();
                            history.push(
                                `${config.routes.POKEDEX_POKEMONS_TYPE}/${type.type.name}`
                            );
                        }}
                    />
                );
            })}
        </Stack>
    );
};
