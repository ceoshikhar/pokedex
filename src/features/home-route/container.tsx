import styled from 'styled-components';

export const HomeRoute: React.FC = () => {
    return (
        <MainContainer>
            <h1>Pokedex</h1>
            <p>
                The Pokédex (ポケモン図鑑; Pokemon Zukan; lit. "Illustrated
                Pokémon Encyclopedia") is an electronic device designed to
                catalogue and provide information regarding the various species
                of Pokémon featured in the Pokémon video game, anime and manga
                series.
            </p>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    max-width: 480px;
    margin: 2rem auto 0 auto;

    h1 {
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.75rem;
    }
`;
