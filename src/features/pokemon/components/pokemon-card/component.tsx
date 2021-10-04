import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { Chip, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { Card } from '@/components/card';
import { Pokemon } from '@/models/pokemon';
import { formatPokemonId, upperCaseFirstLetter } from '@/utils/index';
import { config } from '@/utils/config';

import { PokemonCardPlaceholder } from '@/features/pokemon/components/pokemon-card-placeholder';

interface Props {
    apiUrl: string;
    name: string;
}

export const PokemonsCard: React.FC<Props> = ({ apiUrl, name }: Props) => {
    const history = useHistory();
    const fetchPokemon = (url: string) => fetch(url).then((res) => res.json());

    const { data } = useQuery<Pokemon>(`pokemon-${name}`, () =>
        fetchPokemon(apiUrl)
    );

    if (data) {
        const pokemon = {
            id: data.id,
            name: data.name,
            types: data.types,
            image:
                data.sprites.other['official-artwork'].front_default ||
                data.sprites.front_default,
        };

        return (
            <Card
                style={{
                    padding: '1rem',
                    width: 'fit-content',
                    position: 'relative',
                }}
            >
                <StyledId>#{formatPokemonId(pokemon.id)}</StyledId>

                <StyledImage src={pokemon.image} width={180} height={180} />

                <StyledName>{upperCaseFirstLetter(name)}</StyledName>

                <Stack direction="row" spacing={1}>
                    {pokemon.types.map((type, idx) => {
                        return (
                            <Chip
                                key={idx}
                                label={type.type.name}
                                size="small"
                                clickable
                                onClick={() =>
                                    history.push(
                                        `${config.routes.POKEDEX_POKEMONS_TYPE}/${type.type.name}`
                                    )
                                }
                            />
                        );
                    })}
                </Stack>
            </Card>
        );
    }

    return <PokemonCardPlaceholder />;
};

const StyledId = styled.p`
    font-size: 0.875rem;
    font-family: 'Inter';
    font-weight: 900;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;

const StyledImage = styled.img`
    padding: 1rem;
    box-sizing: border-box;
`;

const StyledName = styled.h3`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    /* image width */
    max-width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
