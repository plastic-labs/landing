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
import { LinkGiant as LinkGiantUi } from './link-giant'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Links / Link Giant',
  component: LinkGiantUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    prompt: {
      control: {
        type: 'text',
      },
      description: 'The link prompt',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'string',
        },
      },
    },
    text: {
      control: {
        type: 'text',
      },
      description: 'The link text',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'string',
        },
      },
    },
    title: {
      control: {
        type: 'text',
      },
      description: 'The link title',
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
  args: {
    onClick: (event: MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation()
      event.preventDefault()
      fn()
    },
  },
} satisfies Meta<typeof LinkGiantUi>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  args: {
    href: 'https://plasticlabs.ai',
    inverse: false,
    prompt: 'You very much want to click this',
    text: 'Link Giant',
    title: 'This is a link',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return (
          <Text variant="Body1">
            <LinkGiantUi {...args} data-state={row as ButtonState} />
          </Text>
        )
      }

      return (
        <StatesGrid columns={['State']} rows={buttonStates} Story={story} />
      )
    },
  ],
}

export const LinkGiant: Story = {
  args: {
    href: 'https://plasticlabs.ai',
    inverse: false,
    prompt: 'You very much want to click this',
    text: 'Link Giant',
    title: 'This is a link',
  },
}
