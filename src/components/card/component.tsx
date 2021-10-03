import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<Props> = ({ children, ...props }: Props) => {
    return <StyledCard {...props}>{children}</StyledCard>;
};

const StyledCard = styled.div`
    background: ${(props) => props.theme.color.background2};
    color: ${(props) => props.theme.color.textPrimary};
    border-radius: 4px;
    transition: background-color 200ms ease-out;

    &:hover {
        background: ${(props) => props.theme.color.background3};
        #remove-button {
            display: flex;
        }
    }
`;
