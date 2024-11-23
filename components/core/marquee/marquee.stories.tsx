/* eslint-disable import/no-default-export */
import { Marquee as LinkInlineUi } from './marquee'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Core / Marquee',
  component: LinkInlineUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'The marquee content',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'string',
        },
      },
    },
    duration: {
      control: {
        type: 'range',
        min: 1,
        max: 40,
        step: 1,
      },
      description: 'The duration of the scroll',
      table: {
        defaultValue: {
          summary: '10',
        },
        type: {
          summary: 'number',
        },
      },
    },
    inverse: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the theme colors should be inverted',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} satisfies Meta<typeof LinkInlineUi>

export default meta
type Story = StoryObj<typeof meta>

export const Marquee: Story = {
  args: {
    children: 'Get in touch',
    duration: 20,
    inverse: false,
  },
}
