import { Container } from "../atoms/container";
import styled from 'styled-components'

const StyledTwoColumnLayout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;

    @media (max-width: 480px){
        flex-direction: column;
        height: max-content;
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