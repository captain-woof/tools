import styled, { css } from 'styled-components'
import { AiOutlineLink } from 'react-icons/ai'

const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;   
    font-size: var(--fs);
    justify-content: space-between;
`

const StyledHeading = styled.div`
    ${({ theme, hoverEffect }) => (css`
        font-size: var(--fs);
        color: ${theme.colors.secondary.dark};
        line-height: var(--lh, 1.5);
        position: relative;

        ${hoverEffect && css`
            & {
                transition: ${theme.transition('color').normal};
                cursor: pointer;
            }
            &:hover {
                color: ${theme.colors.primary.main};
            }
        `}
    `)}
`

const LinkIcon = styled(AiOutlineLink)`
    ${({hoverEffect, theme}) => css`
        height: max(24px, 0.5em);
        width: max(24px, 0.5em);   
        ${hoverEffect && css`
            & {
                transition: ${theme.transition('fill').normal};
            }
            ${StyledHeading}:hover + &,
            &:hover {
                fill: ${theme.colors.primary.main};
            }
        `}
    `}    
`

export const Heading1 = ({ children, style, hoverEffect, isLink }) => {
    return (
        <HeadingWrapper style={{'--fs': "var(--fs-900)"}}>
            <StyledHeading hoverEffect={hoverEffect} isLink={isLink} as='h1' style={{ ...style, "--fs": "var(--fs-900)", '--lh': 1.2 }}>{children}</StyledHeading>
            {isLink &&
                <LinkIcon hoverEffect={hoverEffect}/>
            }
        </HeadingWrapper>
    )
}
export const Heading2 = ({ children, style, hoverEffect, isLink }) => {
    return (
        <HeadingWrapper style={{'--fs': "var(--fs-800)"}}>
            <StyledHeading hoverEffect={hoverEffect} isLink={isLink} as='h2' style={{ ...style, "--fs": "var(--fs-800)", '--lh': 1.2 }}>{children}</StyledHeading>
            {isLink &&
                <LinkIcon hoverEffect={hoverEffect}/>
            }
        </HeadingWrapper>
    )
}
export const Heading3 = ({ children, style, hoverEffect, isLink }) => {
    return (
        <HeadingWrapper style={{'--fs': "var(--fs-700)"}}>
            <StyledHeading hoverEffect={hoverEffect} isLink={isLink} as='h3' style={{ ...style, "--fs": "var(--fs-700)", '--lh': 1.2 }}>{children}</StyledHeading>
            {isLink &&
                <LinkIcon hoverEffect={hoverEffect}/>
            }
        </HeadingWrapper>
    )
}
export const Heading4 = ({ children, style, hoverEffect, isLink }) => {
    return (
        <HeadingWrapper style={{'--fs': "var(--fs-600)"}}>
            <StyledHeading hoverEffect={hoverEffect} isLink={isLink} as='h4' style={{ ...style, "--fs": "var(--fs-600)" }}>{children}</StyledHeading>
            {isLink &&
                <LinkIcon hoverEffect={hoverEffect}/>
            }
        </HeadingWrapper>
    )
}
export const Heading5 = ({ children, style, hoverEffect, isLink }) => {
    return (
        <HeadingWrapper style={{'--fs': "var(--fs-500)"}}>
            <StyledHeading hoverEffect={hoverEffect} isLink={isLink} as='h5' style={{ ...style, "--fs": "var(--fs-500)" }}>{children}</StyledHeading>
            {isLink &&
                <LinkIcon hoverEffect={hoverEffect}/>
            }
        </HeadingWrapper>
    )
}