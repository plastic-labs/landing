/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { ButtonSocial as ButtonSocialUi } from './button-social'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Button Social',
  component: ButtonSocialUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: {
        type: 'select',
      },
      description: 'The destination href',
      options: [
        'https://twitter.com/Plastic_Labs',
        'https://github.com/plastic-labs',
        'https://discord.gg/plasticlabs',
        'https://huggingface.co/plastic-labs',
      ],
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
} satisfies Meta<typeof ButtonSocialUi>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  args: {
    href: 'https://github.com/plastic-labs',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return <ButtonSocialUi {...args} data-state={row as ButtonState} />
      }

      return (
        <StatesGrid columns={['States']} rows={buttonStates} Story={story} />
      )
    },
  ],
}

export const ButtonLink: Story = {
  args: {
    href: 'https://github.com/plastic-labs',
  },
}
