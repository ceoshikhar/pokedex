import React from 'react';
import styled from 'styled-components';
import { SidebarIcon } from './components/sidebar-icon';
import { Tooltip } from '@/components/tooltip';
import { IconFavorite, IconPokemon } from '@/components/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { config } from '@/utils/config';

export const Sidebar: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    const onPokedexRoute = location.pathname.startsWith(config.routes.POKEDEX);
    const onFavoritesRoute = location.pathname === config.routes.FAVORITES;

    const goToPokedexRoute = () =>
        !onPokedexRoute && history.push(config.routes.POKEDEX);
    const goToFavoritesRoute = () =>
        !onFavoritesRoute && history.push(config.routes.FAVORITES);

    return (
        <Container>
            <Tooltip
                title="Pokédex"
                placement="right"
                enterDelay={500}
                disableHoverListener={onPokedexRoute}
            >
                <i>
                    <SidebarIcon
                        icon={IconPokemon}
                        active={onPokedexRoute}
                        onClick={goToPokedexRoute}
                    />
                </i>
            </Tooltip>

            <Tooltip
                title="Favorites"
                placement="right"
                enterDelay={500}
                disableHoverListener={onFavoritesRoute}
            >
                <i>
                    <SidebarIcon
                        icon={IconFavorite}
                        active={onFavoritesRoute}
                        onClick={goToFavoritesRoute}
                    />
                </i>
            </Tooltip>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
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
