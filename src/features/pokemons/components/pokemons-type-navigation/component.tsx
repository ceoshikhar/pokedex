import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { PokeApiList, PokemonsResultItem } from '@/models/poke-api';
import { usePokemonType } from '@/hooks/use-pokemon-type';
import { config } from '@/utils/config';

// `all` tab is same as `/pokedex/pokemons`
export const PokemonsTypeNavigation: React.FC = () => {
    const history = useHistory();
    const type = usePokemonType();

    const handleChange = (event: any, newValue: string) => {
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

    if (data) {
        return (
            <Container>
                <Tabs
                    value={type || 'all'}
                    onChange={handleChange}
                    variant="scrollable"
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
    max-width: 75vw;
    margin: 0 auto 2rem auto;
`;
