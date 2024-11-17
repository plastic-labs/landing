/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { buttonStyleVariants, ButtonStyleVariant } from '../shared/button.types'
import { ButtonLink as ButtonLinkUi } from './button-link'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Button Link',
  component: ButtonLinkUi,
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
    variant: {
      control: {
        type: 'select',
      },
      description: 'The button variant controlling coloration and styling',
      options: buttonStyleVariants,
      table: {
        defaultValue: {
          summary: buttonStyleVariants[0],
        },
        type: {
          summary: `Any of: ${buttonStyleVariants.join(', ')}`,
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
} satisfies Meta<typeof ButtonLinkUi>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  args: {
    children: 'Button',
    href: 'https://plasticlabs.ai',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({
        column,
        row,
      }) => {
        const { variant, ...rest } = args
        return (
          <ButtonLinkUi
            {...rest}
            variant={column as ButtonStyleVariant}
            data-state={row as ButtonState}
          />
        )
      }

      return (
        <StatesGrid
          columns={buttonStyleVariants}
          rows={buttonStates}
          Story={story}
        />
      )
    },
  ],
}

export const ButtonLink: Story = {
  args: {
    children: 'Button',
    href: 'https://plasticlabs.ai',
    variant: 'default',
  },
}
