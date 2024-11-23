/* eslint-disable import/no-default-export */
import { AsciiField as AsciiFieldUi } from './ascii-field'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Illos / Ascii Field',
  component: AsciiFieldUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
  },
} satisfies Meta<typeof AsciiFieldUi>

export default meta
type Story = StoryObj<typeof meta>

export const AsciiField: Story = {
  args: {
    duration: 20,
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
