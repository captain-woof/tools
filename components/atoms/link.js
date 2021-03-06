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
        display: inline-flex;

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

export const Link = ({ id, href, children, style }) => {
    return (
        <LinkNext href={href}>
            <Anchor id={id} style={style}>{children}</Anchor>
        </LinkNext>
    )
}

export const LinkBlock = ({ id, href, children, style }) => {
    return (
        <LinkNext href={href}>
            <a id={id} style={style}>{children}</a>
        </LinkNext>
    )
}

export const LinkExternal = ({ id, href, children, style }) => {
    return (
        <Anchor id={id} href={href} target='_blank' style={style}>{children}</Anchor>
    )
}