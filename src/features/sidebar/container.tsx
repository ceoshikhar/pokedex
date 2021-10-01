import styled from 'styled-components';
import { SidebarIcon } from './components/sidebar-icon';
import { Tooltip } from '@/components/tooltip';
import { IconHome, IconSearch } from '@/components/icons';
import { useHistory, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    const onHomeRoute = location.pathname === '/';
    const onSearchRoute = location.pathname === '/search';

    const goToHomeRoute = () => !onHomeRoute && history.push('/');
    const goToSearchRoute = () => !onSearchRoute && history.push('/search');

    return (
        <Container>
            <Tooltip
                title="Home"
                placement="right"
                enterDelay={1000}
                disableHoverListener={onHomeRoute}
            >
                <i>
                    <SidebarIcon
                        icon={IconHome}
                        active={onHomeRoute}
                        onClick={goToHomeRoute}
                    />
                </i>
            </Tooltip>

            <Tooltip
                title="Search"
                placement="right"
                enterDelay={1000}
                disableHoverListener={onSearchRoute}
            >
                <i>
                    <SidebarIcon
                        icon={IconSearch}
                        active={onSearchRoute}
                        onClick={goToSearchRoute}
                    />
                </i>
            </Tooltip>
        </Container>
    );
};

const Container = styled.div`
    width: 86px;
    height: 100vh;
    padding: 1.5rem 0;
    position: sticky;
    top: 0px;
    left: 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
`;
