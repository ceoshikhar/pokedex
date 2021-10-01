import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const Title: React.FC<Props> = ({ children, ...props }: Props) => (
    <StyledTitle {...props}>{children}</StyledTitle>
);

const StyledTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 900;
`;
