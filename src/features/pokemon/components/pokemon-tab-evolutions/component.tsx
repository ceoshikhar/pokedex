import React from 'react';
import { useQuery } from 'react-query';
import { useTheme } from 'styled-components';
import { Grid } from '@mui/material';

import { TabPanel } from '@/components/tab-panel';
import { Pokemon, PokemonEvolution } from '@/models/pokemon';
import { pokemonNamesFromChainInOrder } from '@/utils/index';
import { PokemonsListCard } from '@/features/pokemons/components/pokemons-list-card';

interface Props {
    value: number;
    index: number;
    pokemon: Pokemon;
    handleOnClick: (e: React.SyntheticEvent<any>) => void;
}

export const PokemonTabEvolutions: React.FC<Props> = ({
    value,
    index,
    pokemon,
    handleOnClick,
}: Props) => {
    const theme = useTheme();

    const fetchPokemonEvolutions = (speciesUrl: string) =>
        fetch(speciesUrl)
            .then((res) => res.json())
            .then((speciesData) => speciesData.evolution_chain.url)
            .then((url) => fetch(url))
            .then((res) => res.json());

    const { data } = useQuery<PokemonEvolution>(
        `pokemon-evolutions-${pokemon.species.url}`,
        () => fetchPokemonEvolutions(pokemon.species.url)
    );

    if (data) {
        const pokemonsInEvolution = pokemonNamesFromChainInOrder(data.chain);

        return (
            <TabPanel value={value} index={index}>
                <Grid
                    spacing={3}
                    container
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'center' }}
                    justifyContent="center"
                >
                    {pokemonsInEvolution.map((pokemonName, idx) => (
                        <Grid item key={idx}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <PokemonsListCard
                                    pokemonName={pokemonName}
                                    evolutionIdx={idx + 1}
                                    style={{
                                        border: `2px solid ${theme.color.primary}`,
                                    }}
                                    onClick={handleOnClick}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
        );
    }

    return null;
};
