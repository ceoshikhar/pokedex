import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';

import { PokemonsListItem } from '@/models/poke-api';

import { PokemonsCardSmall } from '../pokemons-card-small';

interface Props {
    pokemonsList: PokemonsListItem[];
}

export const PokemonsList: React.FC<Props> = ({ pokemonsList }: Props) => {
    return (
        <ListContainer>
            <Grid container spacing={3}>
                {pokemonsList.map((pokemon) => (
                    <Grid
                        item
                        key={pokemon.name}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                    >
                        <PokemonsCardSmall
                            name={pokemon.name}
                            apiUrl={pokemon.url}
                        />
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
