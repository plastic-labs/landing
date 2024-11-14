/* eslint-disable import/no-default-export */
import { Header as HeaderUi } from './header'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout / Header',
  component: HeaderUi,
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
} satisfies Meta<typeof HeaderUi>

export default meta
type Story = StoryObj<typeof meta>

export const Header: Story = {
  args: {
    children: 'This is the header.',
  },
}
