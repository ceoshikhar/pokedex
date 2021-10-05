import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { useTheme } from 'styled-components';
import { TabsProps } from '@mui/material/Tabs';

function a11yProps(index: number, value: string) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `pokemons-info-about-${value}`,
    };
}

interface Props extends TabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, value: any) => void;
}

export const PokemonTabsNavigation: React.FC<Props> = ({
    value,
    onChange,
    ...props
}: Props) => {
    const theme = useTheme();

    return (
        <Tabs
            value={value}
            onChange={onChange}
            variant="fullWidth"
            TabIndicatorProps={{
                style: { background: theme.color.brightBlue },
            }}
            textColor="inherit"
            aria-label="pokemons info tabs navigation"
            {...props}
        >
            <Tab label="about" {...a11yProps(0, 'about')} />
            <Tab label="base stats" {...a11yProps(1, 'base stats')} />
            <Tab label="evolution" {...a11yProps(2, 'evolutions')} />
        </Tabs>
    );
};
