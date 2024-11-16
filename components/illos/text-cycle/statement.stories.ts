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
    cellSize: {
      control: {
        type: 'range',
        min: 1,
        max: 1000,
        step: 1,
      },
      description: 'The cell size in pixels',
      table: {
        defaultValue: {
          summary: '70',
        },
        type: {
          summary: 'number',
        },
      },
    },
    duration: {
      control: {
        type: 'range',
        min: 1,
        max: 20,
        step: 0.5,
      },
      description: 'The duration of the animation',
      table: {
        defaultValue: {
          summary: '5',
        },
        type: {
          summary: 'number',
        },
      },
    },
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
    cellSize: 70,
    duration: 5,
    statement: 'radically decentralizing alignment',
  },
}
