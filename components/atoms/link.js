import styled, { css } from 'styled-components'
import LinkNext from 'next/link'

const Anchor = styled.a`
    ${({ theme }) => (css`
        text-decoration: none;
        color: ${theme.colors.secondary.dark};
        width: fit-content;
        transition: ${theme.transition('color').normal};
        position: relative;
        overflow: hidden;
        width: fit-content;
        cursor: pointer;
        display: inline-block;

        &:hover {
            color: ${theme.colors.primary.main};
        }

        &::after {
            content: '';
            border-radius: 100rem;
            position: absolute;
            width: 100%;
            height: 0.125rem;
            background-color: ${theme.colors.primary.main};
            transition: ${theme.transition('left').normal};
            z-index: -1;
            left: -100%;
            bottom: 0;
            display: block;
        }

        &:hover::after {
            left: 0%;
        }
    `)}    
`

export const Link = ({ id, href, children }) => {
    return (
        <LinkNext href={href}>
            <Anchor id={id}>{children}</Anchor>
        </LinkNext>
    )
}

export const LinkExternal = ({ id, href, children }) => {
    return (
        <Anchor id={id} href={href} target='_blank'>{children}</Anchor>
    )
}