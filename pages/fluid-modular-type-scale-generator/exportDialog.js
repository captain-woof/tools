import { useMemo } from "react";
import Dialog from "../../components/atoms/dialog";
import { Heading3 } from "../../components/atoms/headings";
import { useGlobalState } from "./globalState"
import Code from "../../components/atoms/codeBlock";
import styled from 'styled-components'
import Button from "../../components/atoms/button";
import { copyToClipboard, serveTextFileFromString } from '../../lib/wordfu'
import { FaSave as SaveIcon, FaRegClipboard as CopyIcon } from 'react-icons/fa'
import { BsEraserFill as ResetIcon } from 'react-icons/bs'

// Button container
const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    height: max-content;
    width: 100%;
    margin: var(--sp-400) 0 var(--sp-300) 0;
`

// Export dialog + dynamic code
export default function ExportDialog() {
    const { state, dispatch } = useGlobalState()

    // For keeping codeblock updated
    const code = useMemo(() => (`
/* CUSTOM PROPERTIES */
:root {
    /* Constants for Base font size (fluid) */
    --fs-base: ${state?.fsBase}px;
    --fs-factor-min: ${state?.fsFactorMin};
    --fs-factor-max: ${state?.fsFactorMax};
    --sp-factor: 1rem;
    --lh-min: ${state?.lhMin};
    --lh-max: ${state?.lhMax};
    /* Derived font sizes (min)*/
    --fs-400-min: var(--fs-base);
    --fs-500-min: calc(var(--fs-400-min) * var(--fs-factor-min));
    --fs-600-min: calc(var(--fs-500-min) * var(--fs-factor-min));
    --fs-700-min: calc(var(--fs-600-min) * var(--fs-factor-min));
    --fs-800-min: calc(var(--fs-700-min) * var(--fs-factor-min));
    --fs-900-min: calc(var(--fs-800-min) * var(--fs-factor-min));
    --fs-300-min: calc(var(--fs-400-min) / var(--fs-factor-min));
    --fs-200-min: calc(var(--fs-300-min) / var(--fs-factor-min));
    /* Derived font sizes (max)*/
    --fs-400-max: var(--fs-base);
    --fs-500-max: calc(var(--fs-400-max) * var(--fs-factor-max));
    --fs-600-max: calc(var(--fs-500-max) * var(--fs-factor-max));
    --fs-700-max: calc(var(--fs-600-max) * var(--fs-factor-max));
    --fs-800-max: calc(var(--fs-700-max) * var(--fs-factor-max));
    --fs-900-max: calc(var(--fs-800-max) * var(--fs-factor-max));
    --fs-300-max: calc(var(--fs-400-max) / var(--fs-factor-max));
    --fs-200-max: calc(var(--fs-300-max) / var(--fs-factor-max));
    /* Derived font sizes (fluid) */
    --fs-200: clamp(var(--fs-200-min), var(--fs-200-min) + 4vw, var(--fs-200-max));
    --fs-300: clamp(var(--fs-300-min), var(--fs-300-min) + 2vw, var(--fs-300-max));
    --fs-400: clamp(var(--fs-400-min), var(--fs-400-min) + 0vw, var(--fs-400-max));
    --fs-500: clamp(var(--fs-500-min), var(--fs-500-min) + 1vw, var(--fs-500-max));
    --fs-600: clamp(var(--fs-600-min), var(--fs-600-min) + 1.5vw, var(--fs-600-max));
    --fs-700: clamp(var(--fs-700-min), var(--fs-700-min) + 2vw, var(--fs-700-max));
    --fs-800: clamp(var(--fs-800-min), var(--fs-800-min) + 3vw, var(--fs-800-max));
    --fs-900: clamp(var(--fs-900-min), var(--fs-900-min) + 4vw, var(--fs-900-max));
    /* Derived spacings */
    --sp-200: calc(var(--sp-factor) * 0.5);
    --sp-300: calc(var(--sp-factor) * 0.75);
    --sp-400: calc(var(--sp-factor) * 1);
    --sp-500: calc(var(--sp-factor)* 2);
    --sp-600: calc(var(--sp-factor)* 3);
    --sp-700: calc(var(--sp-factor)* 4);
    --sp-800: calc(var(--sp-factor)* 5);
    --sp-900: calc(var(--sp-factor)* 6);
}
/* RESET */
/* Set rem */
html, body {
    font-size: var(--fs-400);
    word-break: break-word;
}
/* Border box */
*, *::before, *::after {
    box-sizing: border-box;
}
/* Remove margins, paddings and setting default font-weight */
body, h1, h2, h3, h4, h5, p, button, textarea, caption, section {
    margin: 0;
    padding: 0;
}
/* Form elements reset */
input, button, textarea {
    font-family: inherit;
    font-size: inherit;
}
/* Setting font sizes */
p, form, nav, footer, header {
    font-size: var(--fs-400);
    line-height: var(--lh-max);
}
* > * + p {
    margin-top: var(--sp-400);
}
h5 {
    font-size: var(--fs-500);
    line-height: var(--lh-max);
}

h4 {
    font-size: var(--fs-600);
    line-height: var(--lh-max);
}

h3 {
    font-size: var(--fs-700);
    line-height: var(--lh-min);
}

h2 {
    font-size: var(--fs-800);
    line-height: var(--lh-min);
}

h1 {
    font-size: var(--fs-900);
    line-height: var(--lh-min);
}
`), [state?.fsBase, state?.fsFactorMin, state?.fsFactorMax, state?.lhMin, state?.lhMax])

    return (
        <Dialog wide isOpen={state?.exportDialogOpen} setIsOpen={(newIsOpen) => { dispatch({ type: 'SET_EXPORT_DIALOG_OPEN', isOpen: newIsOpen }) }} dialogBoxStyle={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Heading3>Export</Heading3>
            <Code language='css'>
                {code}
            </Code>
            <ButtonsContainer>
                <Button small iconEnd={<ResetIcon />} buttonProps={{
                    onClick: () => { dispatch({ type: "RESET" }) }
                }}>
                    Reset
                </Button>
                <Button small iconEnd={<CopyIcon />} buttonProps={{
                    onClick: () => { copyToClipboard(code) }
                }}>
                    Copy
                </Button>
                <Button small iconEnd={<SaveIcon />} primary buttonProps={{
                    onClick: () => { serveTextFileFromString({ text: code, mimeType: 'text/css', filename: 'index.css' }) }
                }}>
                    Export
                </Button>
            </ButtonsContainer>
        </Dialog >
    )
}