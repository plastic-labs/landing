/* eslint-disable import/no-default-export */
import { PlasticThemeProvider } from '@/contexts/plastic-theme'
import { Header as HeaderUi } from './header'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout / Header',
  component: HeaderUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderUi>

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {
  decorators: [
    Story => (
      <PlasticThemeProvider>
        <Story />
      </PlasticThemeProvider>
    ),
  ],
}
