import styled, { css } from "styled-components"

const StyledSidebar = styled.aside`
    ${({ theme }) => css`
        position: sticky;
        top: 0;
        left: 0;
        height: 100%;
        width: 320px;
        border-right: 4px solid ${theme.colors.primary.main};
        background-color: ${theme.colors.background.light};
        padding: var(--sp-500);

        @media (max-width: 768px){
            width: 235px;
        }

        @media (max-width: 480px){
            & {
                height: fit-content;
                width: 100%;
                border-right: none;
                box-shadow: 0 1px 6px ${theme.colors.secondary.light};
                padding: var(--sp-400);
            }
        }
    `}
`

export default function Sidebar({ children, style }) {
    return (
        <StyledSidebar className='sidebar'>
            {children}
        </StyledSidebar>
    )
}