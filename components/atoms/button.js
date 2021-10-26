import styled, { css } from "styled-components"

const StyledButton = styled.button`
    ${({ theme, primary, small }) => (css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0 0.5rem;
        padding: ${small ? 'var(--sp-200) var(--sp-400)' : 'var(--sp-300) var(--sp-500)'};
        background-color: ${primary ? theme.colors.primary.main : theme.colors.secondary.main};
        border-radius: 4px;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 0 4px ${theme.colors.secondary.light};
        font-size: ${small ? '0.9rem' : '1rem'};

        &:hover {
            background-color: ${primary ? theme.colors.primary.light : theme.colors.secondary.light};
        }

        &:active {
            background-color: ${primary ? theme.colors.primary.dark : theme.colors.secondary.dark};
            box-shadow: 0 0 8px ${theme.colors.secondary.light};
        }

        & svg {
            width: ${small ? '1.2rem' : '1.4rem'};
            height: ${small ? '1.2rem' : '1.4rem'};
            stroke: #fff;
            color: #fff;
            fill: #fff;
        }
    `)}
`

export default function Button({ children, primary, buttonProps, small = false, iconEnd, iconStart, hideTextOnMobile = false }) {
    return (
        <StyledButton {...buttonProps} primary={primary} small={small}>
            {iconStart}
            {children}
            {iconEnd}
        </StyledButton>
    )
}