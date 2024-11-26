/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { LinkNavigation as LinkNavigationUi } from './link-navigation'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Links / Link Navigation',
  component: LinkNavigationUi,
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
} satisfies Meta<typeof LinkNavigationUi>

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
        return <LinkNavigationUi {...args} data-state={row as ButtonState} />
      }

      return (
        <StatesGrid columns={['State']} rows={buttonStates} Story={story} />
      )
    },
  ],
}

export const LinkNavigation: Story = {
  args: {
    children: 'Inline Link',
    href: 'https://plasticlabs.ai',
  },
}
