import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Sidebar } from '@/features/sidebar';
import { LoadingScreen } from '@/features/loading-screen';

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
                                    component={() => <Redirect to="pokedex" />}
                                />

                                <Route path="/pokedex" component={Pokedex} />

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
