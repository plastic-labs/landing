'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import { PlasticTheme, PlasticThemeProvider } from '@/contexts/plastic-theme'
import { StyledComponentsRegistry } from '@/styles/registry'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <PostHogProvider client={posthog}>
      <StyledComponentsRegistry>
        <PlasticThemeProvider>
          <PlasticTheme>{children}</PlasticTheme>
        </PlasticThemeProvider>
      </StyledComponentsRegistry>
    </PostHogProvider>
  )
}
