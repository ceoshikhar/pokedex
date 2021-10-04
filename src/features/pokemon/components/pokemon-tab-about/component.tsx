import React from 'react';
import { TabPanel } from '@/components/tab-panel';
import { Pokemon } from '@/models/pokemon';

import { upperCaseFirstLetter } from '@/utils/index';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { PokemonSpecies } from '@/models/pokemon';

import { StatsContainer, StatsLabel, StatsValue } from '../../styles';

interface Props {
    value: number;
    index: number;
    pokemon: Pokemon;
}

export const PokemonTabAbout: React.FC<Props> = ({
    value,
    index,
    pokemon,
}: Props) => {
    const fetchPokemonSpecies = (url: string) =>
        fetch(url).then((res) => res.json());

    const { data } = useQuery<PokemonSpecies>(
        `pokemon-species-${pokemon.species.url}`,
        () => fetchPokemonSpecies(pokemon.species.url)
    );

    return (
        <TabPanel value={value} index={index}>
            <MainContainer>
                <StatsContainer>
                    <StatsLabel>Height</StatsLabel>
                    <StatsValue>{pokemon.height} dm</StatsValue>
                </StatsContainer>

                <StatsContainer>
                    <StatsLabel>Weight</StatsLabel>
                    <StatsValue>{pokemon.weight} hg</StatsValue>
                </StatsContainer>

                <StatsContainer>
                    <StatsLabel>Abilities</StatsLabel>
                    <Flex>
                        {pokemon.abilities.map((ability, idx) => (
                            <StatsValue key={idx}>
                                {idx > 0 && ', '}
                                {upperCaseFirstLetter(ability.ability.name)}
                            </StatsValue>
                        ))}
                    </Flex>
                </StatsContainer>

                {data && data.egg_groups.length > 0 && (
                    <StatsContainer>
                        <StatsLabel>Egg Groups</StatsLabel>
                        <Flex>
                            {data.egg_groups.map((group, idx) => (
                                <StatsValue key={idx}>
                                    {idx > 0 && ', '}
                                    {upperCaseFirstLetter(group.name)}
                                </StatsValue>
                            ))}
                        </Flex>
                    </StatsContainer>
                )}
            </MainContainer>
        </TabPanel>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
`;

const Flex = styled.div`
    display: flex;
`;
