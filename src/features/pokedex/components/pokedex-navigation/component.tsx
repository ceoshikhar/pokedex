import React from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

import { config } from '@/utils/config';

export const PokedexNavigation: React.FC = () => {
    const location = useLocation();
    const history = useHistory();

    const onPokemonsNav = location.pathname === config.routes.POKEDEX_POKEMONS;
    const onItemsNav = location.pathname === config.routes.POKEDEX_ITEMS;
    const onMachinesNav = location.pathname === config.routes.POKEDEX_MACHINES;

    const goToPokemonsNav = () => {
        !onPokemonsNav && history.push(config.routes.POKEDEX_POKEMONS);
    };

    const goToItemsNav = () => {
        !onItemsNav && history.push(config.routes.POKEDEX_ITEMS);
    };

    const goToMachinesNav = () => {
        !onMachinesNav && history.push(config.routes.POKEDEX_MACHINES);
    };

    return (
        <NavigationContainer>
            <ButtonGroup
                color="primary"
                variant="outlined"
                aria-label="outlined primary pokedex navigation button group"
            >
                <Button
                    variant={onPokemonsNav ? 'contained' : undefined}
                    onClick={goToPokemonsNav}
                    disableFocusRipple={onPokemonsNav}
                    disableTouchRipple={onPokemonsNav}
                >
                    Pokémons
                </Button>
                <Button
                    variant={onItemsNav ? 'contained' : undefined}
                    onClick={goToItemsNav}
                    disableFocusRipple={onItemsNav}
                    disableTouchRipple={onItemsNav}
                >
                    Items
                </Button>
                <Button
                    variant={onMachinesNav ? 'contained' : undefined}
                    onClick={goToMachinesNav}
                    disableFocusRipple={onMachinesNav}
                    disableTouchRipple={onMachinesNav}
                >
                    Machines
                </Button>
            </ButtonGroup>
        </NavigationContainer>
    );
};

const NavigationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;
