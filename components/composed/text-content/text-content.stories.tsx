/* eslint-disable import/no-default-export */
import { Text } from '@/components/core/typography'
import { ButtonLink } from '@/components/interactive/buttons/button-link'
import { TextContent as TextContentUi } from './text-content'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Composed / Text Content',
  component: TextContentUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'The text content',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    ctas: {
      control: {
        type: 'text',
      },
      description: 'Zero or more CTAs',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    title: {
      control: {
        type: 'text',
      },
      description: 'The title',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof TextContentUi>

export default meta
type Story = StoryObj<typeof meta>

export const TextContent: Story = {
  args: {
    children: (
      <>
        <Text variant="Body2">
          Plastic Labs is a research-driven product company building at the
          intersection of human and machine learning.
        </Text>
        <Text variant="Body2">
          Our mission is to eliminate the principal-agent problem in human-AI
          interaction, powering a future of abundant, autonomous,
          individually-aligned agents.
        </Text>
      </>
    ),
    ctas: <ButtonLink href="https://blog.plasticlabs.ai/">Blog</ButtonLink>,
    title: 'About Us',
  },
}
