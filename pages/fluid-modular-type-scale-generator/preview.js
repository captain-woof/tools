import { useGlobalState } from "./globalState"
import styled, { css } from "styled-components"

const PreviewWrapper = styled.div`
    /* Actual style (not part of preview)*/
    ${({theme}) => (css`
        flex-grow: 1;
        height: max-content;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.secondary.light};
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${theme.colors.background.light};
        }
        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.secondary.main};
          border-radius: 10rem;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.colors.secondary.light};
        }

        @media (max-width: 480px){
            height: 70vh;
        }
    `)}
    
    /* PREVIEW */
    /* Spacing constant based on base font size */
    --sp-factor: 1rem;
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
    /* Applying calculated values to children elements */
    & p.caption {
        font-size: var(--fs-300);
        line-height: var(--lh-max);
    }

    & p {
        font-size: var(--fs-400);
        line-height: var(--lh-max);
    }

    & h5 {
        font-size: var(--fs-500);
        line-height: var(--lh-max);
    }

    & h4 {
        font-size: var(--fs-600);
        line-height: var(--lh-max);
    }

    & h3 {
        font-size: var(--fs-700);
        line-height: var(--lh-min);
    }

    & h2 {
        font-size: var(--fs-800);
        line-height: var(--lh-min);
    }

    & h1 {
        font-size: var(--fs-900);
        line-height: var(--lh-min);  
    }
    /* Spacings */
    & article > * + * {
        margin-top: var(--sp-400);
    }
`


export default function Preview() {
    const { state } = useGlobalState()

    return (
        <PreviewWrapper className='preview' style={{
            '--fs-base': `${state?.fsBase}px`,
            '--fs-factor-min': state?.fsFactorMin,
            '--fs-factor-max': state?.fsFactorMax,
            '--lh-min': state?.lhMin,
            '--lh-max': state?.lhMax,
            padding: 'var(--sp-500)'
        }}>
            <article>
                <h1>Fluid-Modular Type scale</h1>
                <h4>Combine the beauty of fluidity and modularity</h4>
                <section>
                    <h1>Heading 1</h1>
                    <p>Do consectetur enim dolore dolore magna occaecat.</p>
                </section>
                <section>
                    <h2>Heading 2</h2>
                    <p>Proident commodo sunt nostrud laboris pariatur occaecat ex nisi sunt velit do ut reprehenderit minim.</p>
                </section>
                <section>
                    <h3>Heading 3</h3>
                    <p>Culpa cillum adipisicing dolore velit.</p>
                </section>
                <section>
                    <h4>Heading 4</h4>
                    <p>Non ea enim nostrud proident eu non sit velit.</p>
                </section>
                <section>
                    <h5>Heading 5</h5>
                    <p>Nulla velit consequat duis pariatur duis magna nulla culpa sit magna amet nisi magna.</p>
                </section>
                <section>
                    <p className='caption'>Caption</p>
                    <p className='caption'>CSS is beautiful!</p>
                </section>
            </article>
        </PreviewWrapper>
    )
}