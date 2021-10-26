import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primary: {
            light: `hsl(206.82,89.95%,60.98%)`,
            main: `hsl(208.04,79.28%,50.78%)`,
            dark: `hsl(211.93,80.28%,41.76%)`
        },
        secondary: {
            light: `hsl(200.00,13.00%,50.00%)`,
            main: `hsl(199.35,18.34%,33.14%)`,
            dark: `hsl(200.00,19.15%,18.43%)`
        },
        background: {
            light: `hsl(0.00,0.00%,100.00%)`,
            main: `hsl(0.00,0.00%,100.00%)`,
            dark: `hsl(0.00,0.00%,98.04%)`
        }
    },
    font: {
        family: "'Poppins', sans-serif",
        sizeBase: '16px',
        modularFactorMin: 1.125,
        modularFactorMax: 1.333
    },
    space: {
        spacingFactor: '1rem'
    },
    lineHeight: {
        min: 1.2,
        max: 1.5
    },
    transition: (property = 'all') => ({
        fast: `${property} 0.4s ease-in-out`,
        normal: `${property} 0.5s ease-in-out`,
        slow: `${property} 0.75s ease-in-out`
    })
}

export default function ThemeProvider({ children }) {
    return (
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    )
}

export const BaseStyle = createGlobalStyle`
    /* CONSTANTS */
    :root {
        /* Derived font sizes (min)*/
        --fs-400-min: ${theme.font.sizeBase};
        --fs-500-min: calc(var(--fs-400-min) * ${theme.font.modularFactorMin});
        --fs-600-min: calc(var(--fs-500-min) * ${theme.font.modularFactorMin});
        --fs-700-min: calc(var(--fs-600-min) * ${theme.font.modularFactorMin});
        --fs-800-min: calc(var(--fs-700-min) * ${theme.font.modularFactorMin});
        --fs-900-min: calc(var(--fs-800-min) * ${theme.font.modularFactorMin});
        --fs-300-min: calc(var(--fs-400-min) / ${theme.font.modularFactorMin});
        --fs-200-min: calc(var(--fs-300-min) / ${theme.font.modularFactorMin});
        /* Derived font sizes (max)*/
        --fs-400-max: ${theme.font.sizeBase};
        --fs-500-max: calc(var(--fs-400-max) * ${theme.font.modularFactorMax});
        --fs-600-max: calc(var(--fs-500-max) * ${theme.font.modularFactorMax});
        --fs-700-max: calc(var(--fs-600-max) * ${theme.font.modularFactorMax});
        --fs-800-max: calc(var(--fs-700-max) * ${theme.font.modularFactorMax});
        --fs-900-max: calc(var(--fs-800-max) * ${theme.font.modularFactorMax});
        --fs-300-max: calc(var(--fs-400-max) / ${theme.font.modularFactorMax});
        --fs-200-max: calc(var(--fs-300-max) / ${theme.font.modularFactorMax});
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
        --sp-200: calc(${theme.space.spacingFactor} * 0.5);
        --sp-300: calc(${theme.space.spacingFactor} * 0.75);
        --sp-400: calc(${theme.space.spacingFactor} * 1);
        --sp-500: calc(${theme.space.spacingFactor}* 2);
        --sp-600: calc(${theme.space.spacingFactor}* 3);
        --sp-700: calc(${theme.space.spacingFactor}* 4);
        --sp-800: calc(${theme.space.spacingFactor}* 5);
        --sp-900: calc(${theme.space.spacingFactor}* 6);
    }   
    
    /* RESET */

    /* Set rem */

    html, body {
        font-size: var(--fs-400);
        font-family: ${theme.font.family};
        word-break: break-word;
    }

    /* Border box */

    *, *::before, *::after {
        box-sizing: border-box;
    }

    /* Remove margins, paddings and setting default font-weight */

    body, h1, h2, h3, h4, h5, p, button, textarea, caption, section, input, ul, ol, li {
        margin: 0;
        padding: 0;
        font-weight: 400;
    }

    /* Form elements reset */

    input, button, textarea, datalist {
        font-family: inherit;
        border: none;
        outline: none;
        font-size: inherit;
    }

    /* Setting margins, paddings and positions*/

    body {
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        background-color: ${theme.colors.background.main};
    }

    /* Disabling style on a */
    a {
        text-decoration: none;
        color: inherit;
    }

    /* Setting body content to full width */
    body > div:first-child {
        width: 100%;
    }

    /* Scrollbar */
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.primary.light};

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.background.light};
      margin: 16px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary.main};
      border-radius: 10rem;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.primary.light};
      border-radius: 10rem;
    }
`