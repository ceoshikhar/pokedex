import React from 'react';

import { TabPanel } from '@/components/tab-panel';
import { Pokemon } from '@/models/pokemon';

import {
    StatsContainer,
    StatsLabel,
    StatsOuterContainer,
    StatsValue,
} from '../../styles';

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
            <StatsOuterContainer>
                {pokemon.stats.map((stat, idx) => (
                    <StatsContainer key={idx}>
                        <StatsLabel>{stat.stat.name}</StatsLabel>
                        <StatsValue>{stat.base_stat}</StatsValue>
                    </StatsContainer>
                ))}
            </StatsOuterContainer>
        </TabPanel>
    );
};
