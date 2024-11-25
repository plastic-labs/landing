'use client'

import styled, { css } from 'styled-components'
import { Text } from '@/components/core/typography'
import { inverseThemePaletteVar } from '@/styles/themes'
import type { PricingCardProps } from './pricing-card.types'

const StyledPricingCard = styled.li<{ $inverse: boolean }>`
  // vars
  --surface: var(--color-primary-surface);
  --surface-contrast: var(--color-primary-surface-contrast);

  align-self: stretch;
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr 3rem;
  grid-gap: 0.75rem;
  margin: 0;
  padding: 1.25rem;
  max-width: 20.4375rem;

  color: var(--surface-contrast);
  background: var(--surface);
  border: 0.0625rem solid var(--surface-contrast);
  border-radius: 0.25rem;
  box-shadow: 0.25rem 0.25rem 0 0 var(--neutral-black);

  list-style-type: none;

  transition: box-shadow var(--ui-transition-speed) ease;

  // states
  &:hover:not(:active):not([href='']):not([href='#']):not([data-state]),
  &[data-state='hover'] {
    box-shadow: 0.375rem 0.375rem 0 0 var(--neutral-black);
  }

  ${({ $inverse, theme }) =>
    $inverse
      ? css`
          --surface: var(
            ${inverseThemePaletteVar(theme, '--color-primary-surface')}
          );
          --surface-contrast: var(
            ${inverseThemePaletteVar(theme, '--color-primary-surface-contrast')}
          );
        `
      : ''}
`

const StyledPricing = styled.p`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin: 0;
  color: currentColor;
  text-transform: uppercase;
`

const StyledDetails = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  padding: 0;
  color: currentColor;
  list-style-type: none;

  li {
    padding-top: 0.3125rem;
    padding-left: 1em;

    &::before {
      content: '\003e';
      margin-left: -1em;
      padding-right: 0.4rem;
    }
  }

  li:not(:last-child) {
    padding-bottom: 0.3125rem;
    border-bottom: 0.0625rem dotted currentColor;
  }
`

const StyledActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const PricingCard: React.FC<PricingCardProps> = ({
  ctas,
  description,
  details,
  isFeatured = false,
  name,
  period = 'month',
  price,
  ...props
}) => {
  if (!ctas || !name || typeof price !== 'number' || price < 0) {
    return null
  }

  return (
    <StyledPricingCard {...props} $inverse={isFeatured}>
      <StyledPricing>
        {price === 0 ? (
          <Text variant="Accent4">Free</Text>
        ) : (
          <>
            <Text as="span" variant="Accent4">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              })
                .format(price)
                .replace(/\.00$/, '')}
            </Text>
            <Text as="span" variant="Body3">
              {`/a ${period}`}
            </Text>
          </>
        )}
      </StyledPricing>
      <Text variant="Accent3">{name}</Text>
      <StyledDetails>
        {details.map(detail => (
          <Text as="li" variant="Body2" key={detail}>
            {detail}
          </Text>
        ))}
      </StyledDetails>
      <StyledActions>{ctas}</StyledActions>
    </StyledPricingCard>
  )
}
