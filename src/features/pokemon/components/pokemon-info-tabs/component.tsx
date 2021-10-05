import React, { useState } from 'react';

import { Pokemon } from '@/models/pokemon';

import { PokemonTabsNavigation } from '../pokemon-tabs-navigation';
import { PokemonTabAbout } from '../pokemon-tab-about/component';
import { PokemonTabStats } from '../pokemon-tab-stats';
import { PokemonTabEvolutions } from '../pokemon-tab-evolutions';

interface Props {
    pokemon: Pokemon;
}

export const PokemonInfoTabs: React.FC<Props> = ({ pokemon }: Props) => {
    const [currTab, setCurrTab] = useState(0);

    const handleTabChange = (_: any, newValue: number) => {
        setCurrTab(newValue);
    };

    return (
        <div>
            <PokemonTabsNavigation
                value={currTab}
                onChange={handleTabChange}
                sx={{ mb: 4 }}
            />
            <PokemonTabAbout value={currTab} index={0} pokemon={pokemon} />
            <PokemonTabStats value={currTab} index={1} pokemon={pokemon} />
            <PokemonTabEvolutions
                value={currTab}
                index={2}
                pokemon={pokemon}
                handleClickOnCard={() => setCurrTab(0)}
            />
        </div>
    );
};
