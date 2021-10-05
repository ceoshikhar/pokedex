import React from 'react';
import styled from 'styled-components';

import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';
import { PaginationControl } from '@/components/pagination-control';
import { PokemonsList } from '@/features/pokemons/components/pokemons-list';
import { useListPagination } from '@/hooks/use-list-pagination';

import { useFavoritesStore } from './use-favorites-store';
import { useDocumentTitle } from '@/hooks/use-document-title';

export const Favorites: React.FC = () => {
    useDocumentTitle('Favorites');
    const { favorites } = useFavoritesStore();
    const { limit, currPage, offset } = useListPagination();

    const count = favorites.length;

    return (
        <>
            <MainContainer>
                <Title style={{ marginBottom: '0.5rem' }}>Favorites</Title>
                <Subtitle>Pokémons that you love</Subtitle>
            </MainContainer>

            <PokemonsList
                pokemonNames={favorites.slice(offset, offset + limit)}
            />

            <PaginationControl
                page={currPage}
                count={Math.ceil(count / limit)}
            />
        </>
    );
};

const MainContainer = styled.div`
    max-width: 480px;
    margin-bottom: 2rem;
`;
