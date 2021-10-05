import React, { Suspense, lazy } from 'react';
import { useTheme } from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Title } from '@/components/title';
import { Tooltip } from '@/components/tooltip';
import { IconQuestion } from '@/components/icons';
import { LoadingScreen } from '@/features/loading-screen';
import { PokemonSearch } from '@/features/pokemon/components/pokemon-search';

import { config } from '@/utils/config';

const Pokemons = lazy(() => import('@/features/pokemons'));
const NotFound = lazy(() => import('@/features/not-found'));

export const Pokedex: React.FC = () => {
    const theme = useTheme();

    return (
        <>
            <div>
                <Title style={{ position: 'relative' }}>
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

                <PokemonSearch />
            </div>

            <Suspense fallback={<LoadingScreen />}>
                <Switch>
                    <Route
                        exact
                        path={config.routes.POKEDEX}
                        component={() => (
                            <Redirect to={config.routes.POKEDEX_POKEMONS} />
                        )}
                    />

                    <Route
                        exact
                        path={config.routes.POKEDEX_POKEMONS}
                        component={Pokemons}
                    />

                    <Route
                        exact
                        path={config.routes.POKEDEX_POKEMONS_WITH_TYPE_MATCH}
                        component={Pokemons}
                    />

                    {/* For routes like `pokedex/pokemons/type` */}
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </>
    );
};
