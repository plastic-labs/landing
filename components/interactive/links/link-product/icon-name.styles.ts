'use client'

import styled from 'styled-components'

export const StyledSvg = styled.svg`
  &:not(:first-child) {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:nth-child(2) {
    transform: translateY(-0.0625rem);
  }

  &:nth-child(3) {
    transform: translateY(-0.125rem);
  }

  &:nth-child(4) {
    transform: translateY(-0.1875rem);
  }

  &:nth-child(5) {
    transform: translateY(-0.25rem);
  }
`
