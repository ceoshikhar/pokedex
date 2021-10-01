import styled from 'styled-components';
import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';

export const FavoritesRoute: React.FC = () => {
    return (
        <MainContainer>
            <Title style={{ marginBottom: '0.5rem' }}>Favorites</Title>
            <Subtitle>Pokémons that you love</Subtitle>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    max-width: 480px;
`;
