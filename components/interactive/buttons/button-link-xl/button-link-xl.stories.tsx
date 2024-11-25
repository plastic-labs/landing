/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { ButtonLinkXl as ButtonLinkXlUi } from './button-link-xl'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Buttons / Button Link XL',
  component: ButtonLinkXlUi,
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
} satisfies Meta<typeof ButtonLinkXlUi>

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
        return <ButtonLinkXlUi {...args} data-state={row as ButtonState} />
      }

      return (
        <StatesGrid columns={['States']} rows={buttonStates} Story={story} />
      )
    },
  ],
}

export const ButtonLinkXl: Story = {
  args: {
    children: 'Button',
    href: 'https://plasticlabs.ai',
    inverse: false,
  },
}
