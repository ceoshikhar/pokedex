import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Subtitle: React.FC<Props> = ({ children, ...props }: Props) => (
    <StyledParagraph {...props}>{children}</StyledParagraph>
);

const StyledParagraph = styled.p`
    font-size: 0.75rem;
`;
