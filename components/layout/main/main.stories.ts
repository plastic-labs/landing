/* eslint-disable import/no-default-export */
import { Main as MainUi } from './main'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout / Main',
  component: MainUi,
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
} satisfies Meta<typeof MainUi>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    children: 'This is the main.',
  },
}
