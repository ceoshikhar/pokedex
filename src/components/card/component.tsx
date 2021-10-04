import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    clickable?: boolean;
    onClick?: (e: React.SyntheticEvent<any>) => void;
}

export const Card: React.FC<Props> = ({ children, ...props }: Props) => {
    return <StyledCard {...props}>{children}</StyledCard>;
};

const StyledCard = styled.div<Props>`
    background: ${(props) => props.theme.color.background2};
    color: ${(props) => props.theme.color.textPrimary};
    border-radius: 4px;
    transition: background-color 200ms ease-out;
    cursor: ${(props) => props.clickable && 'pointer'};

    &:hover {
        background: ${(props) =>
            props.clickable && props.theme.color.background3};
    }
`;
