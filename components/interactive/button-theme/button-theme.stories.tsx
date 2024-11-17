/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { ButtonTheme as ButtonThemeUi } from './button-theme'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Button Theme',
  component: ButtonThemeUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disabled state',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    onClick: {
      control: false,
      description: 'The handler function for button presses/clicks',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'VoidFunction | React.MouseEventHandler<HTMLButtonElement>',
        },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonThemeUi>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  argTypes: {
    disabled: {
      control: false,
    },
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return <ButtonThemeUi {...args} data-state={row as ButtonState} />
      }

      return (
        <StatesGrid columns={['States']} rows={buttonStates} Story={story} />
      )
    },
  ],
}

export const Button: Story = {
  args: {
    disabled: false,
  },
}
