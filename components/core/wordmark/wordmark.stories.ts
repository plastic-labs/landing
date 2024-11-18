/* eslint-disable import/no-default-export */
import { colors } from '@/styles/palette'
import { Wordmark as WordmarkUi } from './wordmark'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Core / Wordmark',
  component: WordmarkUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 1,
        max: 1000,
        step: 1,
      },
      description: 'The logo width in pixels',
      table: {
        defaultValue: {
          summary: '123',
        },
        type: {
          summary: 'number',
        },
      },
    },
    height: {
      control: {
        type: 'range',
        min: 1,
        max: 1000,
        step: 1,
      },
      description: 'The logo height in pixels',
      table: {
        defaultValue: {
          summary: '34',
        },
        type: {
          summary: 'number',
        },
      },
    },
    fill: {
      control: {
        type: 'select',
      },
      description: 'The logo fill color',
      options: colors,
      table: {
        defaultValue: {
          summary: colors[0],
        },
        type: {
          summary: `Any of: ${colors.join(', ')}`,
        },
      },
    },
  },
} satisfies Meta<typeof WordmarkUi>

export default meta
type Story = StoryObj<typeof meta>

export const Wordmark: Story = {
  args: {
    width: 123,
    height: 34,
  },
}
