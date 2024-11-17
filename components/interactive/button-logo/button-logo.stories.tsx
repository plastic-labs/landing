/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { ButtonLogo as ButtonLogoUi } from './button-logo'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Button Logo',
  component: ButtonLogoUi,
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
          summary: '/',
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
} satisfies Meta<typeof ButtonLogoUi>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  args: {
    href: '/',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return <ButtonLogoUi {...args} data-state={row as ButtonState} />
      }

      return (
        <StatesGrid columns={['State']} rows={buttonStates} Story={story} />
      )
    },
  ],
}

export const ButtonLogo: Story = {
  args: {
    href: '/',
  },
}
