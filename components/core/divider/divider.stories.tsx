/* eslint-disable import/no-default-export */
import { Divider as DividerUi } from './divider'
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
