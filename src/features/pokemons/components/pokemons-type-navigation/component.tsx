import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { useQuery } from 'react-query';
import styled, { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';

import { PokeApiList, PokemonsResultItem } from '@/models/poke-api';
import { usePokemonType } from '@/hooks/use-pokemon-type';
import { config } from '@/utils/config';

// `all` tab is same as `/pokedex/pokemons`
export const PokemonsTypeNavigation: React.FC = () => {
    const theme = useTheme();
    const history = useHistory();
    const type = usePokemonType();

    const handleChange = (_: any, newValue: string) => {
        if (newValue === 'all') {
            return history.push(config.routes.POKEDEX_POKEMONS);
        }

        const goTo = `${config.routes.POKEDEX_POKEMONS_TYPE}/${newValue}`;

        if (history.location.pathname !== goTo) {
            history.push(goTo);
        }
    };

    const fetchTypesOfPokemons = () =>
        fetch(`https://pokeapi.co/api/v2/type`).then((res) => res.json());

    const { data } = useQuery<PokeApiList<PokemonsResultItem>>(
        'types-of-pokemons',
        () => fetchTypesOfPokemons()
    );

    if (data && type) {
        const validPokemonTypes: string[] = data.results.map(
            (type) => type.name
        );

        if (!validPokemonTypes.includes(type)) {
            history.push(config.routes.POKEDEX_POKEMONS);
        }
    }

    if (data) {
        return (
            <Container>
                <Tabs
                    value={type || 'all'}
                    onChange={handleChange}
                    variant="scrollable"
                    TabIndicatorProps={{
                        style: { background: theme.color.brightBlue },
                    }}
                    textColor="inherit"
                    aria-label="pokemons by type navigation tabs"
                >
                    <Tab value="all" label="all" />
                    {data.results.map((type) => (
                        <Tab
                            key={type.name}
                            value={type.name}
                            label={type.name}
                        />
                    ))}
                </Tabs>
            </Container>
        );
    }

    return null;
};

const Container = styled.div`
    margin-bottom: 2rem;
`;
