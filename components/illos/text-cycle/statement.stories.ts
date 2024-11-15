/* eslint-disable import/no-default-export */
import { TextCycle as TextCycleUi } from './statement'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Illos / Text Cycle / Statement',
  component: TextCycleUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    statement: {
      control: {
        type: 'text',
      },
      description: 'The statement to use',
      table: {
        defaultValue: {
          summary: 'required',
        },
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof TextCycleUi>

export default meta
type Story = StoryObj<typeof meta>

export const Statement: Story = {
  args: {
    statement: 'radically decentralizing alignment',
  },
}
