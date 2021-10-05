import React from 'react';
import styled from 'styled-components';

import { Title } from '@/components/title';
import { formatPokemonId, upperCaseFirstLetter } from '@/utils/index';
import { Pokemon } from '@/models/pokemon';
import { Card } from '@/components/card';

import { PokemonTypesChip } from '../pokemon-types-chip';
import { PokemonInfoTabs } from '../pokemon-info-tabs';
import { FavoritesToggleButton } from '@/features/favorites/components/favorites-toggle-button';

interface Props {
    pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }: Props) => {
    const image =
        pokemon.sprites.other['official-artwork'].front_default ||
        pokemon.sprites.front_default;

    return (
        <Container>
            <Card
                style={{
                    display: 'flex',
                    padding: '2rem',
                    position: 'relative',
                    borderRadius: '16px',
                    flexDirection: 'column',
                }}
            >
                <div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <div>
                            <Title
                                style={{
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {upperCaseFirstLetter(pokemon.name)}
                            </Title>
                            <PokemonTypesChip types={pokemon.types} />
                        </div>

                        <FavoritesToggleButton pokemonName={pokemon.name} />
                    </div>

                    <Id>#{formatPokemonId(pokemon.id)}</Id>
                    <div
                        style={{
                            width: 'fit-content',
                            margin: '0 auto',
                        }}
                    >
                        <img
                            src={image}
                            width={450}
                            height={450}
                            alt={`${pokemon.name} official artwork`}
                            style={{
                                padding: '1rem',
                                boxSizing: 'border-box',
                            }}
                        />
                    </div>
                </div>

                <PokemonInfoTabs pokemon={pokemon} />
            </Card>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

const Id = styled.p`
    font-size: 0.875rem;
    font-family: 'Inter';
    font-weight: 900;
    position: absolute;
    top: 0.5rem;
    right: 0.95rem;
`;
