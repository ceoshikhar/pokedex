import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Sidebar } from '@/features/sidebar';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <DashboardContainer></DashboardContainer>
            </Layout>
        </BrowserRouter>
    );
};

const SidebarContainer = styled.div`
    width: 86px;
`;

const DashboardContainer = styled.div`
    width: 100%;
`;

const Layout = styled.div`
    display: flex;
    max-width: 100vw;
`;
