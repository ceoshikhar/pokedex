import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Sidebar } from '@/features/sidebar';
import { LoadingScreen } from '@/features/loading-screen';
import { QueryClient, QueryClientProvider } from 'react-query';

const PokedexRoute = lazy(() => import('@/features/pokedex-route'));
const FavoritesRoute = lazy(() => import('@/features/favorites-route'));
const NotFoundRoute = lazy(() => import('@/features/not-found-route'));

const queryClient = new QueryClient();

export const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout>
                    <SidebarContainer>
                        <Sidebar />
                    </SidebarContainer>

                    <DashboardContainer>
                        <Suspense fallback={<LoadingScreen />}>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={PokedexRoute}
                                />

                                <Route
                                    path="/favorites"
                                    component={FavoritesRoute}
                                />

                                <Route component={NotFoundRoute} />
                            </Switch>
                        </Suspense>
                    </DashboardContainer>
                </Layout>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

const SidebarContainer = styled.div`
    width: 86px;
`;

const DashboardContainer = styled.div`
    width: 100%;
    padding: 1.5rem;
`;

const Layout = styled.div`
    display: flex;
    max-width: 100vw;
`;
