'use client'

import styled from 'styled-components'
import { BackgroundDotsProps } from './button-product.types'

const StyledBackgroundDots = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(calc(100vw - 2rem), 26.25rem);
  aspect-ratio: 420 / 200;
  background: var(--surface-base, var(--interactive-product-surface));
  border: 0.03125rem solid
    var(--surface-contrast-base, var(--interactive-product-surface-contrast));
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: border-color var(--ui-transition-speed) ease;

  * {
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(
      --surface-hover-base,
      var(--interactive-product-surface-hover)
    );
    border-radius: 0.25rem;
    opacity: 0;
    z-index: 0;
    transition: opacity var(--ui-transition-speed) ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(24 * 3.9%);
    aspect-ratio: 400 / 180;
    background: url('/dot.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 4.1%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  *:hover:not([data-state]) > &,
  *[data-state='hover'] > &,
  *:active:not([data-state]) > &,
  *[data-state='pressed'] > & {
    border-color: var(
      --border-hover-base,
      var(--interactive-product-border-hover)
    );

    &::before {
      opacity: 1;
    }
  }
`

export const BackgroundDots: React.FC<BackgroundDotsProps> = ({
  children,
  ...props
}) => {
  return <StyledBackgroundDots {...props}>{children}</StyledBackgroundDots>
}
