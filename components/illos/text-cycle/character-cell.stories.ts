/* eslint-disable import/no-default-export */
import { CharacterCell as CharacterCellUi } from './character-cell'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Illos / Text Cycle / Character Cell',
  component: CharacterCellUi,
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
    character: {
      control: {
        type: 'text',
      },
      description: 'The character',
      table: {
        defaultValue: {
          summary: 'required',
        },
        type: {
          summary: 'string',
        },
      },
    },
    cycle: {
      control: {
        type: 'range',
        min: 1,
        max: 3,
        step: 1,
      },
      description: 'The cycle in which the character flashes and disappears',
      table: {
        defaultValue: {
          summary: '1',
        },
        type: {
          summary: 'Cycle',
        },
      },
    },
  },
} satisfies Meta<typeof CharacterCellUi>

export default meta
type Story = StoryObj<typeof meta>

export const CharacterCell: Story = {
  args: {
    cellSize: 70,
    character: 'A',
    cycle: 1,
  },
}
