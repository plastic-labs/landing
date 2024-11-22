/* eslint-disable import/no-default-export */
import { Divider as DividerUi } from './divider'
import { orientations } from './divider.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Core / Divider',
  component: DividerUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: {
        type: 'text',
      },
      description: 'The grid-columns CSS',
      table: {
        defaultValue: {
          summary: 'span 1',
        },
        type: {
          summary: 'string',
        },
      },
    },
    orientation: {
      control: {
        type: 'select',
      },
      description: 'The orientation of the divider',
      options: orientations,
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: `Orientation: any of: ${orientations.join(', ')}.`,
        },
      },
    },
    rows: {
      control: {
        type: 'text',
      },
      description: 'The grid-rows CSS',
      table: {
        defaultValue: {
          summary: 'span 1',
        },
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof DividerUi>

export default meta
type Story = StoryObj<typeof meta>

export const Divider: Story = {
  args: {
    columns: 'span 1',
    orientation: 'vertical',
    rows: 'span 1',
  },
  decorators: [
    Story => (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          width: '16rem',
          aspectRatio: 1,
        }}
      >
        <Story />
      </div>
    ),
  ],
}
