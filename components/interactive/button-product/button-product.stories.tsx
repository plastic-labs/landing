/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { ButtonProduct as ButtonProductUi } from './button-product'
import { products } from './button-product.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Button Product',
  component: ButtonProductUi,
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
        'https://bloombot.ai/',
        'https://honcho.dev/',
        'https://yousim.ai/',
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
    product: {
      control: {
        type: 'select',
      },
      description: 'The destination product',
      options: products,
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: `Any of: ${products.join(', ')}`,
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
} satisfies Meta<typeof ButtonProductUi>

export default meta
type Story = StoryObj<typeof meta>

const validStates = [...buttonStates]
validStates.pop()

export const States: Story = {
  args: {
    href: 'https://github.com/plastic-labs',
    product: 'bloom',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return <ButtonProductUi {...args} data-state={row as ButtonState} />
      }

      return (
        <StatesGrid columns={['States']} rows={validStates} Story={story} />
      )
    },
  ],
}

export const ButtonProduct: Story = {
  args: {
    href: 'https://github.com/plastic-labs',
    product: 'bloom',
  },
}
