import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Card } from '@/components/card';
import { Pokemon } from '@/models/pokemon';
import { formatPokemonId, upperCaseFirstLetter } from '@/utils/index';
import { config } from '@/utils/config';
import { PokemonTypesChip } from '@/features/pokemon/components/pokemon-types-chip';

import { PokemonsListCardPlaceholder } from '../pokemons-list-card-placeholder';
import { Chip } from '@mui/material';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    evolutionIdx?: number;
}

export const PokemonsListCard: React.FC<Props> = ({
    name,
    style,
    evolutionIdx = 0,
    ...props
}: Props) => {
    const history = useHistory();

    // Same query key is used in `PokemonCard` for caching
    const fetchPokemon = (name: string) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
            res.json()
        );

    const { data, isError } = useQuery<Pokemon>(`pokemon-${name}`, () =>
        fetchPokemon(name)
    );

    const showPokemonCard = (e: any) => {
        history.push(`${config.routes.POKEMON}/${name}`);

        if (props.onClick) {
            props.onClick(e);
        }
    };

    // Some Pokemon evolution's chain have Pokemon names that return 404 error.
    if (isError) {
        return null;
    }

    if (data) {
        const image =
            data.sprites.other['official-artwork'].front_default ||
            data.sprites.front_default;

        return (
            <Card
                style={{
                    padding: '1rem',
                    width: 'fit-content',
                    position: 'relative',
                    ...style,
                }}
                clickable
                {...props}
                onClick={showPokemonCard}
            >
                {evolutionIdx > 0 && (
                    <EvolutoionIdxContainer>
                        <Chip
                            label={evolutionIdx}
                            variant="outlined"
                            color="secondary"
                            size="small"
                        />
                    </EvolutoionIdxContainer>
                )}

                <Id>#{formatPokemonId(data.id)}</Id>

                <Image src={image} width={180} height={180} />

                <Name>{upperCaseFirstLetter(data.name)}</Name>

                <PokemonTypesChip types={data.types} />
            </Card>
        );
    }

    return <PokemonsListCardPlaceholder />;
};

const Id = styled.p`
    font-size: 0.875rem;
    font-family: 'Inter';
    font-weight: 900;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
`;

const EvolutoionIdxContainer = styled.div`
    font-size: 0.875rem;
    font-family: 'Inter';
    font-weight: 900;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
`;

const Image = styled.img`
    padding: 1rem;
    box-sizing: border-box;
`;

const Name = styled.h3`
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
