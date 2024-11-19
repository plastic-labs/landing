/* eslint-disable import/no-default-export */
import { BackgroundDots as BackgroundDotsUi } from './background-dots'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Button Product / Background Dots',
  component: BackgroundDotsUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'The button content',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
} satisfies Meta<typeof BackgroundDotsUi>

export default meta
type Story = StoryObj<typeof meta>

export const BackgroundDots: Story = {
  args: {
    children: <span>PRODUCT</span>,
  },
}
