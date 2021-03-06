import styled, { css } from "styled-components"
import { IoMdClose } from 'react-icons/io'
import { useCallback } from "react"

const Wrapper = styled.div`
    position: fixed;        
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    z-index: 100;
    margin: 0;
`

const Backdrop = styled.div`
    ${({ theme }) => css`
        /* Appear animation */
        @keyframes appear {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 0.95;
            }
        }
        position: absolute;        
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;        
        background-color: ${theme.colors.secondary.dark};
        animation: appear 0.5s linear both;
        margin: 0;
    `}
`

const DialogBox = styled.div`
    ${({ theme, wide }) => css`
        position: relative;
        z-index: 101;
        height: ${wide ? '75vh' : 'clamp(280px, 30vh, 320px)'};
        width: ${wide ? '85vw' : 'clamp(320px ,30vw, 360px)'};
        background-color: ${theme.colors.background.light};
        box-shadow: 0 16px 24px ${theme.colors.secondary.dark};
        padding: var(--sp-400);
        opacity: 1;

        @media (max-width: 480px){
            height: 80vh;
            width: 80vw;
        }
    `}    
`

const CloseIcon = styled(IoMdClose)`
    ${({ theme }) => (css`
        position: absolute;
        fill: ${theme.colors.secondary.dark};
        top: var(--sp-400);
        right: var(--sp-400);
        height: 1.35rem;
        width: 1.35rem;
        cursor: pointer;
        z-index: 102;

        &:hover{
            fill: ${theme.colors.secondary.light};
        }
    `)}    
`

export default function Dialog({ children, backdropStyle, dialogBoxStyle, wide, isOpen, setIsOpen }) {
    const handleClose = useCallback((e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false)
        }
    }, [setIsOpen])

    return (
        isOpen &&
        <Wrapper>
            <Backdrop style={backdropStyle} className='dialog-backdrop' onClick={handleClose}/>
            <DialogBox style={dialogBoxStyle} className='dialog-box' wide={wide}>
                <CloseIcon onClick={handleClose} />
                {children}
            </DialogBox>
        </Wrapper>
        || null
    )
}