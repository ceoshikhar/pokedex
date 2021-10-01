import { Title } from '@/components/title';
import { Subtitle } from '@/components/subtitle';
import styled from 'styled-components';

export const NotFoundRoute: React.FC = () => {
    return (
        <Container>
            <div>
                <Title style={{ marginBottom: '0.5rem' }}>Ooops! - 404</Title>
                <Subtitle>
                    Looks like you are lost. This page could not be found.
                </Subtitle>
            </div>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
