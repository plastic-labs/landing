/* eslint-disable import/no-default-export */
import { Title as TitleUi } from './title'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Core / Title',
  component: TitleUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      description: 'The primary title to be rendered as an h2 element',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'string',
        },
      },
    },
    subItems: {
      control: {
        type: 'text',
      },
      description: 'The secondary items',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string[]',
        },
      },
    },
  },
} satisfies Meta<typeof TitleUi>

export default meta
type Story = StoryObj<typeof meta>

export const Title: Story = {
  args: {
    title: 'Our Products',
    subItems: ['Honcho', 'Bloom', 'Yousim'],
  },
}
