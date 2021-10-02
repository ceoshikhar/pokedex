import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { LoadingSpinner } from '@/components/loading-spinner';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    text?: string;
    disabled?: boolean;
    loading?: boolean;
    width?: string;
}

export const Button = ({
    text = '',
    children,
    width = '',
    disabled = false,
    loading = false,
    ...rest
}: Props) => {
    return (
        <StyledButton {...rest} disabled={disabled || loading} width={width}>
            {loading ? <LoadingSpinner /> : <>{children || text}</>}
        </StyledButton>
    );
};

const StyledButton = styled.button<Omit<Props, 'text'>>`
    position: relative;
    background: ${(props) =>
        props.disabled
            ? props.theme.color.disabled
            : props.theme.color.primary};
    color: ${(props) =>
        props.disabled
            ? props.theme.color.onDisabled
            : props.theme.color.onPrimary};
    font-size: 1rem;
    font-weight: 700;
    padding: 6px 16px;
    width: ${(props) => props.width};
    border-radius: 4px;
    border: none;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    letter-spacing: 0.5px;
    transition: background-color 200ms ease-out;
    &:hover {
        background: ${(props) =>
            !props.disabled && props.theme.color.onPrimaryHover};
    }
    &:active {
        background: ${(props) => !props.disabled && props.theme.color.primary};
    }
`;
