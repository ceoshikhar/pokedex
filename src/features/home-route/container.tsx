import styled from 'styled-components';
import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';

export const HomeRoute: React.FC = () => {
    return (
        <MainContainer>
            <Title style={{ marginBottom: '0.5rem' }}>Pokédex</Title>
            <Subtitle>
                The Pokédex (ポケモン図鑑; Pokemon Zukan; lit. "Illustrated
                Pokémon Encyclopedia") is an electronic device designed to
                catalogue and provide information regarding the various species
                of Pokémon featured in the Pokémon video game, anime and manga
                series.
            </Subtitle>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    max-width: 480px;
`;
