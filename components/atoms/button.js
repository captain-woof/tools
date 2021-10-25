import styled, { css } from "styled-components"

const StyledButton = styled.button`
    ${({ theme, primary, small }) => (css`
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 0 0.5rem;
        padding: ${small ? 'var(--sp-200) var(--sp-400)' : 'var(--sp-300) var(--sp-500)'};
        background-color: ${primary ? theme.colors.primary.main : theme.colors.secondary.light};
        border-radius: 4px;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
        box-shadow: 0 0 4px ${theme.colors.secondary.light};

        &:active {
            background-color: ${primary ? theme.colors.primary.dark : theme.colors.secondary.dark};
            box-shadow: 0 0 8px ${theme.colors.secondary.light};
        }

        & svg {
            width: ${small ? '1.2rem' : '1.4rem'};
            height: ${small ? '1.2rem' : '1.4rem'};
        }
    `)}
`

export default function Button({ children, primary, buttonProps, small = false, iconEnd }) {
    return (
        <StyledButton {...buttonProps} primary={primary} small={small}>
            {children}
            {iconEnd}
        </StyledButton>
    )
}