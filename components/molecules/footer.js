import styled, { css } from 'styled-components'
import Row from '../atoms/row'
import { BsLinkedin as LinkedinIcon, BsInstagram as InstagramIcon, BsTwitter as TwitterIcon } from 'react-icons/bs'
import { MdEmail as EmailIcon } from 'react-icons/md'

const StyledFooter = styled.footer`
    ${({ theme }) => (css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 10vh;
        height: max-content;
        background-color: ${theme.colors.primary.light};
        padding: var(--sp-300) var(--sp-400);

        & * {
            color: #fff;
        }
    `)}
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                Tools by <b><a href="https://sohail.saha.in/">Sohail Saha</a></b>
            </p>
            <Row hCenter vCenter style={{ gap: '0 1rem' }}>
                <a rel="noreferrer" href="https://www.linkedin.com/in/sohail-saha/" target="_blank"><LinkedinIcon /></a>
                <a rel="noreferrer" href="https://instagram.com/sohail_saha_" target="_blank"><InstagramIcon /></a>
                <a rel="noreferrer" href="https://twitter.com/realCaptainWoof" target="_blank"><TwitterIcon /></a>
                <a rel="noreferrer" href="mailto:captainwoof.official@gmail.com" target="_blank"><EmailIcon /></a>
            </Row>
        </StyledFooter>
    )
}