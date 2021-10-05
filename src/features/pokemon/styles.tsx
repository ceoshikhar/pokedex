import styled from 'styled-components';

export const StatsOuterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
`;

export const StatsLabel = styled.p`
    font-size: 1rem;
    font-family: 'Inter';
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${(props) => props.theme.color.secondary};
`;

export const StatsValue = styled.p`
    font-size: 2rem;
    font-family: 'Roboto';
    font-weight: 700;
`;
