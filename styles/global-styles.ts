'use client'

import { createGlobalStyle } from 'styled-components'
import { departureMono, exo2, robotoMono } from './fonts'
import { colorValues, neutralValues } from './palette'
import type { ColorVar, NeutralVar } from './palette'

export const GlobalStyles = createGlobalStyle`
  :root {
    ${Object.keys(neutralValues)
      .map(
        neutralKey =>
          `${neutralKey}: ${neutralValues[neutralKey as NeutralVar]};`,
      )
      .join('\n')};

    ${Object.keys(colorValues)
      .map(colorKey => `${colorKey}: ${colorValues[colorKey as ColorVar]};`)
      .join('\n')};

    --font-family-departure-mono: ${departureMono.style.fontFamily}, monospace;
    --font-family-exo2: '${exo2.style.fontFamily}';
    --font-family-roboto-mono: '${robotoMono.style.fontFamily}', monospace;

    --scale-xxxs: 0.0625rem;
    --scale-xxs: 0.125rem;
    --scale-xs: 0.25rem;
    --scale-s: 0.5rem;
    --scale-ms: 0.75rem;
    --scale-m: 1rem;
    --scale-ml: 1.25rem;
    --scale-l: 1.5rem;
    --scale-xl: 2rem;
    --scale-xxl: 2.5rem;
    --scale-xxxl: 3rem;
    --scale-xxxxl: 4rem;
    --scale-xxxxxl: 5rem;

    --ui-transition-speed: 144ms;

    --default-font-family: var(--font-family-roboto-mono);
    --default-text-color: black;
    --default-background-color: white;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 100%; // 1rem = 16px
    color: var(--default-text-color);
    background-color: var(--default-background-color);
  }

  body {
    min-height: 100vh;
    font-family: var(--default-font-family);

    @supports (height: 100dvh) {
      min-height: 100dvh;
    }
  }
`
