import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Sidebar } from '@/features/sidebar';
import { LoadingScreen } from '@/features/loading-screen';

import { config } from '@/utils/config';

const Pokedex = lazy(() => import('@/features/pokedex'));
const Favorites = lazy(() => import('@/features/favorites'));
const NotFound = lazy(() => import('@/features/not-found'));

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
                                    component={() => (
                                        <Redirect to={config.routes.POKEDEX} />
                                    )}
                                />

                                <Route
                                    path={config.routes.POKEDEX}
                                    component={Pokedex}
                                />

                                <Route
                                    path="/favorites"
                                    component={Favorites}
                                />

                                <Route component={NotFound} />
                            </Switch>
                        </Suspense>
                    </DashboardContainer>
                </Layout>
            </BrowserRouter>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

const Layout = styled.div`
    display: flex;
`;

const SidebarContainer = styled.div`
    width: 86px;
`;

const DashboardContainer = styled.div`
    width: calc(100vw - 86px);
    padding: 1.5rem;
    box-sizing: border-box;
`;
