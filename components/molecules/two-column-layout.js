import { Container } from "../atoms/container";
import styled from 'styled-components'

const StyledTwoColumnLayout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100vh;
    width: 100%;

    @media (max-width: 480px){
        flex-direction: column;
    }
`

export default function TwoColumnLayout({ children }) {
    return (
        <Container style={{ padding: 0 }}>
            <StyledTwoColumnLayout>
                {children}
            </StyledTwoColumnLayout>
        </Container>
    )
}