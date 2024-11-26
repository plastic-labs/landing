/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import { Text } from '@/components/core/typography'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { LinkInline as LinkInlineUi } from './link-inline'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Links / Link Inline',
  component: LinkInlineUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'The button content',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    href: {
      control: {
        type: 'text',
      },
      description: 'The destination href',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'string Url',
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
  args: {
    onClick: (event: MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation()
      event.preventDefault()
      fn()
    },
  },
} satisfies Meta<typeof LinkInlineUi>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  args: {
    children: 'Button',
    href: 'https://plasticlabs.ai',
    inverse: false,
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return (
          <Text variant="Body1">
            <LinkInlineUi {...args} data-state={row as ButtonState} />
          </Text>
        )
      }

      return (
        <StatesGrid columns={['State']} rows={buttonStates} Story={story} />
      )
    },
  ],
}

export const LinkInline: Story = {
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    children: 'Inline Link',
    href: 'https://plasticlabs.ai',
    inverse: false,
  },
  decorators: [
    (_, { args }) => {
      const { children, ...rest } = args
      return (
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}
        >
          <Text variant="Body1">
            Extending this logic, one cannot separate costs from stelar
            hearings. A pruner of the spain is assumed to be an unwrapped
            headlight.{' '}
            <LinkInlineUi {...rest}>The danger is a bush.</LinkInlineUi> A
            enough motorcycle’s business comes with it the thought that the
            sightless moat is a cocoa.
          </Text>
          <Text align="right" variant="Body2">
            —{' '}
            <LinkInlineUi href="http://metaphorpsum.com/">
              Lorem Metaphorpsum
            </LinkInlineUi>
          </Text>
        </div>
      )
    },
  ],
}
