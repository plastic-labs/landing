/* eslint-disable import/no-default-export */
import { TitleBar as TitleBarUi } from './title-bar'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Links / Link Product / Supporting / Title Bar',
  component: TitleBarUi,
  parameters: {
    layout: 'fullscreen',
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
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof TitleBarUi>

export default meta
type Story = StoryObj<typeof meta>

export const TitleBar: Story = {
  args: {
    children: 'Enter',
  },
}
