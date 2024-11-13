/* eslint-disable import/no-default-export */
import { Footer as FooterUi } from './footer'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout / Footer',
  component: FooterUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'The child content',
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
} satisfies Meta<typeof FooterUi>

export default meta
type Story = StoryObj<typeof meta>

export const Footer: Story = {
  args: {
    children: 'This is the footer.',
  },
}
