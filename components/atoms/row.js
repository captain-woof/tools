import styled, { css } from 'styled-components'

const StyledRow = styled.div`
    ${({ wrap, hCenter, vCenter }) => css`
        display: flex;
        flex-direction: row;
        flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        height: max-content;
        justify-content: ${hCenter ? 'center' : 'auto'};
        align-items: ${vCenter ? 'center' : 'auto'};
    `}
`

export default function Row({ children, wrap = true, style, hCenter = false, vCenter = false }) {
    return (
        <StyledRow wrap={wrap} style={style} vCenter={vCenter} hCenter={hCenter}>
            {children}
        </StyledRow>
    )
}