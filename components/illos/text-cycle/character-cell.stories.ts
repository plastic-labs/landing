/* eslint-disable import/no-default-export */
import { CharacterCell as CharacterCellUi } from './character-cell'
import { cycles } from './text-cycle.types'
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
        max: cycles.length,
        step: 1,
      },
      description: 'The cycle in which the character flashes and disappears',
      table: {
        defaultValue: {
          summary: '1',
        },
        type: {
          summary: `Cycle: any of: ${cycles.join(', ')}.`,
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
  },
} satisfies Meta<typeof CharacterCellUi>

export default meta
type Story = StoryObj<typeof meta>

export const CharacterCell: Story = {
  args: {
    cellSize: 70,
    character: 'A',
    cycle: 1,
    duration: 5,
  },
}
