import styled from 'styled-components'

const StyledContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    padding: var(--sp-800);

    @media (max-width: 480px) {
        & {
            padding: var(--sp-600) var(--sp-500);
        }
    }
`

const StyledLobotomizedContainer = styled(StyledContainer)`
    & > * + * {
        margin-top: var(--sp-300);
    }
`

export const LobotomizedContainer = ({children, style}) => {
    return (
        <StyledLobotomizedContainer style={style} className='container-lobotomized'>
            {children}
        </StyledLobotomizedContainer>
    )
}

export const Container = ({children, style}) => {
    return (
        <StyledContainer style={style} className='container'>
            {children}
        </StyledContainer>
    )
}