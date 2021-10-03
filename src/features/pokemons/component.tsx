import React from 'react';

import { usePokemonType } from '@/hooks/use-pokemon-type';
import { PokemonsListByType } from '@/features/pokemons/components/pokemons-list-by-type';
import { PokemonsListAll } from '@/features/pokemons/components/pokemons-list-all';

import { PokemonsTypeNavigation } from './components/pokemons-type-navigation';

export const Pokemons: React.FC = () => {
    const type = usePokemonType();

    return (
        <>
            <PokemonsTypeNavigation />
            {type ? <PokemonsListByType /> : <PokemonsListAll />}
        </>
    );
};
