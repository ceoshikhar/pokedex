import styled from 'styled-components';
import { Title } from '@/components/title';
import { IconQuestion } from '@/components/icons';
import { Tooltip } from '@/components/tooltip';

export const PokedexRoute: React.FC = () => {
    return (
        <MainContainer>
            <Title style={{ marginBottom: '0.5rem', position: 'relative' }}>
                Pokédex
                <Tooltip
                    title={`The Pokédex (ポケモン図鑑; Pokemon Zukan; lit. "Illustrated
                Pokémon Encyclopedia") is an electronic device designed to
                catalogue and provide information regarding the various species
                of Pokémon featured in the Pokémon video game, anime and manga
                series.`}
                    placement="bottom"
                    style={{ fontSize: '0.8rem' }}
                >
                    <i>
                        <IconQuestion
                            size={16}
                            style={{
                                position: 'absolute',
                                top: '4px',
                                marginLeft: '4px',
                            }}
                        />
                    </i>
                </Tooltip>
            </Title>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    max-width: 480px;
`;
