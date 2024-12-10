'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import {
  LinkPartner,
  partnerNames,
  PARTNER_WIDTH,
} from '@/components/interactive/links/link-partner'
import { THIN_BREAKPOINT } from '@/styles/breakpoints'
import type { PartnersProps } from './partners.types'
import type { PartnerName } from '@/components/interactive/links/link-partner'

const partnerHref: Record<PartnerName, string> = {
  betaworks: 'https://www.betaworks.com/',
  'mozilla-ventures': 'https://mozilla.vc/',
  greycroft: 'https://www.greycroft.com/',
  differential: 'https://www.differential.vc/',
  algovera: 'https://www.algovera.ai/',
  'white-star-capital': 'https://whitestarcapital.com/digital-asset-fund/',
  'seed-club-ventures': 'https://seedclub.ventures/',
  'thomas-howell': 'https://x.com/seethomasowl',
  'nima-ashgari': 'https://x.com/insideNiMA',
}

const partnersScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const StyledPartnersWrapper = styled.div`
  --line-width: 0.0625rem;

  display: grid;
  grid-template-columns: 1fr;
  overflow-x: hidden;
  background: var(--color-primary-surface-contrast);
  border-width: var(--line-width);
  border-style: solid;
  border-color: var(--color-primary-surface-contrast);
  box-sizing: border-box;

  @media (min-resolution: 192dpi) {
    --line-width: 0.03125rem;
  }

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    overflow: hidden;
    border-width: var(--line-width) 0;
  }
`

const StyledPartners = styled.nav<{
  $shouldScroll: boolean
  $duration: number
}>`
  --count: 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--line-width);
  min-width: 0; // triggers layout for children
  box-sizing: border-box;

  @media (min-resolution: 192dpi) {
    --line-width: 0.03125rem;
  }

  @media (min-width: ${THIN_BREAKPOINT}rem) {
    display: flex;
    gap: var(--line-width);
    width: calc(var(--count) * ${PARTNER_WIDTH}rem);
    animation-duration: ${({ $duration }) => $duration}s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  ${({ $shouldScroll }) =>
    $shouldScroll
      ? css`
          animation-name: ${partnersScroll};

          @media (min-width: ${THIN_BREAKPOINT}rem) {
            width: calc(var(--count) * 2 * ${PARTNER_WIDTH}rem);
          }
        `
      : ''}
`

export const Partners: React.FC<PartnersProps> = ({
  duration = 5,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const [shouldScroll, setShouldScroll] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setShouldScroll(
        (trackRef.current?.getBoundingClientRect().width || 0) >
          (wrapperRef.current?.getBoundingClientRect().width || 0),
      )
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <StyledPartnersWrapper {...props} ref={wrapperRef}>
      <StyledPartners
        style={
          {
            '--count': partnerNames.length,
          } as CSSProperties
        }
        ref={trackRef}
        $duration={duration * partnerNames.length}
        $shouldScroll={shouldScroll}
      >
        {partnerNames.map(partnerName => (
          <LinkPartner
            href={partnerHref[partnerName]}
            partnerName={partnerName}
            key={partnerName}
          />
        ))}
        {shouldScroll
          ? partnerNames.map(partnerName => (
              <LinkPartner
                href={partnerHref[partnerName]}
                partnerName={partnerName}
                key={`${partnerName}-dup`}
              />
            ))
          : null}
      </StyledPartners>
    </StyledPartnersWrapper>
  )
}
