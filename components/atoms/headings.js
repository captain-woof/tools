import styled, { css } from 'styled-components'

const StyledHeading = styled.div`
    ${({theme}) => (css`
        font-size: var(--fs);
        color: ${theme.colors.secondary.dark};
        line-height: var(--lh, 1.5);
    `)}
`

export const Heading1 = ({children}) => {
    return (
        <StyledHeading as='h1' style={{"--fs" : "var(--fs-900)", '--lh': 1.2}}>{children}</StyledHeading>
    )
}
export const Heading2 = ({children}) => {
    return (
        <StyledHeading as='h2' style={{"--fs" : "var(--fs-800)", '--lh': 1.2}}>{children}</StyledHeading>
    )
}
export const Heading3 = ({children}) => {
    return (
        <StyledHeading as='h3' style={{"--fs" : "var(--fs-700)", '--lh': 1.2}}>{children}</StyledHeading>
    )
}
export const Heading4 = ({children}) => {
    return (
        <StyledHeading as='h4' style={{"--fs" : "var(--fs-600)"}}>{children}</StyledHeading>
    )
}
export const Heading5 = ({children}) => {
    return (
        <StyledHeading as='h5' style={{"--fs" : "var(--fs-500)"}}>{children}</StyledHeading>
    )
}