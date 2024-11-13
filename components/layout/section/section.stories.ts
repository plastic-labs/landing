/* eslint-disable import/no-default-export */
import { Section as SectionUi } from './section'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout / Section',
  component: SectionUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'The child content',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    useViewport: {
      control: {
        type: 'boolean',
      },
      description:
        'Section should fit to viewport height; a section already consumes as much width as provided',
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
} satisfies Meta<typeof SectionUi>

export default meta
type Story = StoryObj<typeof meta>

export const Section: Story = {
  args: {
    children: 'This is the section.',
    useViewport: false,
  },
}
