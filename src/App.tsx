import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Sidebar } from '@/features/sidebar';
import { LoadingScreen } from '@/features/loading-screen';

// This code splitting provides no real benefits but it's a good practice.
const HomeRoute = lazy(() => import('@/features/home-route'));
const SearchRoute = lazy(() => import('@/features/search-route'));
const NotFoundRoute = lazy(() => import('@/features/not-found-route'));

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>

                <DashboardContainer>
                    <Suspense fallback={<LoadingScreen />}>
                        <Switch>
                            <Route exact path="/" component={HomeRoute} />

                            <Route path="/search" component={SearchRoute} />

                            <Route component={NotFoundRoute} />
                        </Switch>
                    </Suspense>
                </DashboardContainer>
            </Layout>
        </BrowserRouter>
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
