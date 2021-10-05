import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { IconButton, TextField } from '@mui/material';

import { IconSearch } from '@/components/icons';
import { config } from '@/utils/config';

export const PokemonSearch: React.FC = () => {
    const theme = useTheme();
    const history = useHistory();
    const [query, setQuery] = useState('');

    const handleSearch = (event: React.SyntheticEvent<any>) => {
        event.preventDefault();

        history.push(`${config.routes.POKEMON}/${query.toLowerCase()}`);
    };

    return (
        <Form onSubmit={handleSearch}>
            <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                label="Search for Pokémon by name"
                placeholder="pikachu"
                sx={{ mr: 2 }}
                fullWidth
            />
            <IconButton size="large" disabled={!query} onClick={handleSearch}>
                <IconSearch size={32} color={query && theme.color.primary} />
            </IconButton>
        </Form>
    );
};

const Form = styled.form`
    max-width: 400px;
    margin: 0 auto 2rem auto;
    display: flex;
`;
