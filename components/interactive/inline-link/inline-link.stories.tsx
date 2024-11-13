/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import { Text } from '@/components/core/typography'
import {
  LinkState,
  linkStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { InlineLink as InlineLinkUi } from './inline-link'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Inline Link',
  component: InlineLinkUi,
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
  },
  args: {
    onClick: (event: MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation()
      event.preventDefault()
      fn()
    },
  },
} satisfies Meta<typeof InlineLinkUi>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  args: {
    children: 'Button',
    href: 'https://plasticlabs.ai',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return (
          <Text variant="Body1">
            <InlineLinkUi {...args} data-state={row as LinkState} />
          </Text>
        )
      }

      return <StatesGrid columns={['State']} rows={linkStates} Story={story} />
    },
  ],
}

export const InlineLink: Story = {
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    children: 'Inline Link',
    href: 'https://plasticlabs.ai',
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
            <InlineLinkUi {...rest}>The danger is a bush.</InlineLinkUi> A
            enough motorcycle’s business comes with it the thought that the
            sightless moat is a cocoa.
          </Text>
          <Text align="right" variant="Body2">
            —{' '}
            <InlineLinkUi href="http://metaphorpsum.com/">
              Lorem Metaphorpsum
            </InlineLinkUi>
          </Text>
        </div>
      )
    },
  ],
}
