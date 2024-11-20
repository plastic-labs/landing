'use client'

import styled from 'styled-components'
import { ButtonLogo } from '@/components/interactive/buttons/button-logo'
import { ButtonTheme } from '@/components/interactive/buttons/button-theme'
import { usePlasticTheme } from '@/hooks/use-plastic-theme'
import { Navigation } from './navigation'
import { SiteTitle } from './site-title'
import type { HeaderProps } from './header.types'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: min-content 0.0625rem 1fr 0.0625rem min-content;
  height: 4.375rem;
  background: var(--color-primary-surface);
  border-width: 0.0625rem 0;
  border-style: solid;
  border-color: var(--color-primary-surface-contrast);
  box-sizing: border-box;
`

const Divider = styled.span`
  background: var(--color-primary-surface-contrast);
`

export const Header: React.FC<HeaderProps> = props => {
  const { toggleTheme } = usePlasticTheme()

  return (
    <StyledHeader {...props}>
      <SiteTitle />
      <ButtonLogo href="/" />
      <Divider />
      <Navigation />
      <Divider />
      <ButtonTheme onClick={toggleTheme} />
    </StyledHeader>
  )
}
