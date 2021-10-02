import React, { Suspense, lazy } from 'react';
import styled, { useTheme } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { Title } from '@/components/title';
import { Tooltip } from '@/components/tooltip';
import { IconQuestion } from '@/components/icons';
import { LoadingScreen } from '@/features/loading-screen';

import { PokedexNavigation } from './components/pokedex-navigation';
import { Subtitle } from '@/components/subtitle';

const Pokemons = lazy(() => import('@/features/pokemons'));

export const Pokedex: React.FC = () => {
    const theme = useTheme();

    return (
        <>
            <Title style={{ marginBottom: '2rem', position: 'relative' }}>
                Pokédex
                <Tooltip
                    title={`The Pokédex (ポケモン図鑑; Pokemon Zukan; lit. "Illustrated
                Pokémon Encyclopedia") is an electronic device designed to
                catalogue and provide information regarding the various species
                of Pokémon featured in the Pokémon video game, anime and manga
                series.`}
                    placement="bottom"
                    style={{ fontSize: '0.8rem' }}
                >
                    <i>
                        <IconQuestion
                            size={16}
                            color={theme.color.brightBlue}
                            style={{
                                position: 'absolute',
                                top: '4px',
                                marginLeft: '4px',
                            }}
                        />
                    </i>
                </Tooltip>
            </Title>

            <PokedexNavigation />

            <Suspense fallback={<LoadingScreen />}>
                <Switch>
                    <Route
                        path="/pokedex"
                        exact
                        component={() => (
                            <BrowsingContainer>
                                <Title style={{ marginBottom: '0.5rem' }}>
                                    Browse things from Pokémon
                                </Title>
                                <Subtitle>
                                    Select a category from navigation bar above
                                    to start browsing!
                                </Subtitle>
                            </BrowsingContainer>
                        )}
                    />

                    <Route path="/pokedex/pokemons" component={Pokemons} />
                </Switch>
            </Suspense>
        </>
    );
};

const BrowsingContainer = styled.div`
    margin: 25% 0;
    text-align: center;
`;
