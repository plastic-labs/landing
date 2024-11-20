/* eslint-disable import/no-default-export */
import { Statement as StatementUi } from './statement'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Illos / Statement',
  component: StatementUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    characterCount: {
      control: {
        type: 'range',
        min: 1,
        max: 30,
        step: 1,
      },
      description: 'The characters to render in a single line',
      table: {
        defaultValue: {
          summary: '15',
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
          summary: '3',
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
} satisfies Meta<typeof StatementUi>

export default meta
type Story = StoryObj<typeof meta>

export const Statement: Story = {
  args: {
    characterCount: 15,
    duration: 3,
    statement: 'radically \ndecentralizing alignment',
  },
  decorators: [
    Story => (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        <Story />
      </div>
    ),
  ],
}
