import React from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

export const PokedexNavigation: React.FC = () => {
    const location = useLocation();
    const history = useHistory();

    const onPokemonsNav = location.pathname === '/pokedex/pokemons';
    const onItemsNav = location.pathname === '/pokedex/items';
    const onMachinesNav = location.pathname === '/pokedex/machines';

    const goToPokemonsNav = () => {
        !onPokemonsNav && history.push('/pokedex/pokemons');
    };

    const goToItemsNav = () => {
        !onItemsNav && history.push('/pokedex/items');
    };

    const goToMachinesNav = () => {
        !onMachinesNav && history.push('/pokedex/machines');
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
`;
