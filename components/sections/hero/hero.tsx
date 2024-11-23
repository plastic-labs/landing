'use client'

import { CSSProperties, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AboutUs } from '@/components/composed/about-us'
import { HeroStatement } from '@/components/composed/hero-statement'
import { Divider } from '@/components/core/divider'
import { AsciiField } from '@/components/illos/ascii-field'
import { Section } from '@/components/layout/section'
import { WIDE_BREAKPOINT } from '@/styles/breakpoints'
import { IconPlus } from './icon-plus'

const DEFAULT_MAIN_NAVIGATION_WIDTH = 305 // pixels

const StyledHeroSection = styled(Section)`
  --main-navigation-width: ${DEFAULT_MAIN_NAVIGATION_WIDTH};

  display: grid;
  align-items: start;
  grid-template-columns: 1fr;

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    grid-template-columns: 1fr 0.0625rem calc(
        var(--main-navigation-width) / 16 * 1rem
      );
    grid-template-rows: 4.3125rem min-content 0.0625rem min-content 0.0625rem;
  }
`

const StyledLeadRow = styled.span`
  position: relative;
  display: none;
  box-sizing: border-box;

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    align-self: stretch;
    grid-column: span 3;
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr;
    background: linear-gradient(
      to right,
      transparent 0%,
      transparent 4.25rem,
      var(--color-primary-surface-contrast) 4.25rem,
      var(--color-primary-surface-contrast) 4.3125rem,
      transparent 4.3125rem,
      transparent calc(100% - (var(--main-navigation-width) + 1) / 16 * 1rem),
      var(--color-primary-surface-contrast)
        calc(100% - (var(--main-navigation-width) + 1) / 16 * 1rem),
      var(--color-primary-surface-contrast)
        calc(100% - var(--main-navigation-width) / 16 * 1rem),
      transparent calc(100% - var(--main-navigation-width) / 16 * 1rem),
      transparent calc(100% - 4.3125rem),
      var(--color-primary-surface-contrast) calc(100% - 4.3125rem),
      var(--color-primary-surface-contrast) calc(100% - 4.25rem),
      transparent calc(100% - 4.25rem),
      transparent 100%
    );
    border-bottom: 0.0625rem solid var(--color-primary-surface-contrast);
  }
`

const StyledPluses = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 4.75rem;
  display: none;
  justify-content: space-between;
  width: calc(100vw - 4.75rem * 2);
  color: var(--color-primary-surface-contrast);

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    display: flex;
  }
`

const MiddleDivider = styled(Divider)`
  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    grid-column: 2;
    grid-row: 2 / span 3;
  }
`

const LastDivider = styled(Divider)`
  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    grid-column: 1 / span 3;
  }
`

const StyledHeroStatement = styled(HeroStatement)`
  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    padding-left: 4.3125rem;
    padding-bottom: 13.75rem;
    background: linear-gradient(
      to right,
      transparent 0%,
      transparent 4.25rem,
      var(--color-primary-surface-contrast) 4.25rem,
      var(--color-primary-surface-contrast) 4.3125rem,
      transparent 4.3125rem,
      transparent 100%
    );
  }
`

const StyledAboutUsWrapper = styled.div`
  align-self: start;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
`

const StyledAsciiField = styled(AsciiField)`
  min-height: 11.0625rem;

  @media (min-width: ${WIDE_BREAKPOINT}rem) {
    grid-column: 3;
    grid-row: 2 / span 3;
  }
`

const Pluses: React.FC = () => {
  return (
    <StyledPluses>
      <IconPlus />
      <IconPlus />
      <IconPlus />
      <IconPlus />
      <IconPlus />
    </StyledPluses>
  )
}

export const HeroSection: React.FC = () => {
  const [mainNavigationWidth, setMainNavigationWidth] = useState<number>(
    DEFAULT_MAIN_NAVIGATION_WIDTH,
  )

  useEffect(() => {
    const mainNavigationEl = document.getElementById('main-navigation')
    if (mainNavigationEl) {
      const { width } = mainNavigationEl.getBoundingClientRect()
      if (width) {
        setMainNavigationWidth(width + 68)
      }
    }
  }, [])

  return (
    <StyledHeroSection
      id="top"
      style={
        { '--main-navigation-width': mainNavigationWidth } as CSSProperties
      }
    >
      <StyledLeadRow>
        <Pluses />
      </StyledLeadRow>
      <StyledHeroStatement />
      <Divider />
      <StyledAboutUsWrapper>
        <Pluses />
        <AboutUs />
      </StyledAboutUsWrapper>
      <MiddleDivider />
      <StyledAsciiField />
      <LastDivider />
    </StyledHeroSection>
  )
}
