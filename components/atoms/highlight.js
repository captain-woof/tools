import styled, { css } from 'styled-components'

const StyledHighlight = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.primary.main};
    `}
`

export default function Highlight({ children }) {
    return (
        <StyledHighlight>
            {children}
        </StyledHighlight>
    )
}