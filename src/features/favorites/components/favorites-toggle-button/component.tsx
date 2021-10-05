import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { IconButton } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';

import { IconHeart, IconHeartFill } from '@/components/icons';

import {
    addToFavorites,
    checkIfFavorite,
    removeFromFavorites,
} from '../../storage';

interface Props extends IconButtonProps {
    pokemonName: string;
}

export const FavoritesToggleButton: React.FC<Props> = ({
    pokemonName,
    ...props
}: Props) => {
    const theme = useTheme();

    const [isFavorite, setIsFavorite] = useState(checkIfFavorite(pokemonName));

    const handleAddToFavorites = () => {
        addToFavorites(pokemonName);
        setIsFavorite(true);
    };

    const handleRemoveFromFavorites = () => {
        removeFromFavorites(pokemonName);
        setIsFavorite(false);
    };

    const handleFavoriteToggle = (e: React.SyntheticEvent<any>) => {
        e.stopPropagation();

        if (isFavorite) {
            handleRemoveFromFavorites();
        } else {
            handleAddToFavorites();
        }
    };

    React.useEffect(() => {
        setIsFavorite(checkIfFavorite(pokemonName));
    }, [pokemonName]);

    return (
        <IconButton
            aria-label="favorite toggle"
            size="large"
            onClick={handleFavoriteToggle}
            sx={{ color: theme.color.brightBlue }}
            {...props}
        >
            {isFavorite ? <IconHeartFill /> : <IconHeart />}
        </IconButton>
    );
};
