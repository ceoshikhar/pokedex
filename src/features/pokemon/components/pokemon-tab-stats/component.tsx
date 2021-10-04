import React from 'react';

import { TabPanel } from '@/components/tab-panel';
import { Pokemon } from '@/models/pokemon';

import { StatsContainer, StatsLabel, StatsValue } from '../../styles';
import styled from 'styled-components';

interface Props {
    value: number;
    index: number;
    pokemon: Pokemon;
}

export const PokemonTabStats: React.FC<Props> = ({
    value,
    index,
    pokemon,
}: Props) => {
    return (
        <TabPanel value={value} index={index}>
            <MainContainer>
                {pokemon.stats.map((stat, idx) => (
                    <StatsContainer key={idx}>
                        <StatsLabel>{stat.stat.name}</StatsLabel>
                        <StatsValue>{stat.base_stat}</StatsValue>
                    </StatsContainer>
                ))}
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
