import styled from 'styled-components'

const StyledContainer = styled.div`
    min-height: 100vh;
    width: 80rem;
    padding: var(--sp-800);

    @media (max-width: 480px) {
        & {
            width: 90%;
            padding: var(--sp-600) var(--sp-400);
        }
    }
`

export default function Container ({children}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}