/* eslint-disable import/no-default-export */
import { Partners as PartnersUi } from './partners'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Composed / Partners',
  component: PartnersUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    duration: {
      control: {
        type: 'range',
        min: 1,
        max: 30,
        step: 1,
      },
      description: 'The duration per partner',
      table: {
        defaultValue: {
          summary: '5',
        },
        type: {
          summary: 'number',
        },
      },
    },
  },
} satisfies Meta<typeof PartnersUi>

export default meta
type Story = StoryObj<typeof meta>

export const Partners: Story = {
  args: {
    duration: 5,
  },
}
