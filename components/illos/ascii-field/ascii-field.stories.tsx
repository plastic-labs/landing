/* eslint-disable import/no-default-export */
import { AsciiField as AsciiFieldUi } from './ascii-field'
import { directions } from './ascii-field.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Illos / Ascii Field',
  component: AsciiFieldUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'select',
      },
      description: 'The duration of the animation',
      options: directions,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: `Direction: any of: ${directions.join(', ')}.`,
        },
      },
    },
    duration: {
      control: {
        type: 'range',
        min: 1,
        max: 40,
        step: 0.5,
      },
      description: 'The duration of the animation',
      table: {
        defaultValue: {
          summary: '20',
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
} satisfies Meta<typeof AsciiFieldUi>

export default meta
type Story = StoryObj<typeof meta>

export const AsciiField: Story = {
  args: {
    direction: 'horizontal',
    duration: 20,
    inverse: false,
  },
  decorators: [
    Story => (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          width: '32rem',
          aspectRatio: 1,
        }}
      >
        <Story />
      </div>
    ),
  ],
}
