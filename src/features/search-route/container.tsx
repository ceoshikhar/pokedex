import styled from 'styled-components';
import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';

export const SearchRoute: React.FC = () => {
    return (
        <MainContainer>
            <Title style={{ marginBottom: '0.5rem' }}>Search</Title>
            <Subtitle>Browse for any Pokémon</Subtitle>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    max-width: 480px;
`;
