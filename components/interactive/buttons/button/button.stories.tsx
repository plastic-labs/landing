/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { buttonStyleVariants, ButtonStyleVariant } from '../shared/button.types'
import { Button as ButtonUi } from './button'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Buttons / Button',
  component: ButtonUi,
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
    variant: {
      control: {
        type: 'select',
      },
      description:
        'The button variant controlling coloration, size and styling',
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
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonUi>

export default meta
type Story = StoryObj<typeof meta>

export const States: Story = {
  argTypes: {
    disabled: {
      control: false,
    },
    variant: {
      control: false,
    },
  },
  args: {
    children: 'Button',
    inverse: false,
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({
        column,
        row,
      }) => {
        const { variant, ...rest } = args
        return (
          <ButtonUi
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

export const Button: Story = {
  args: {
    children: 'Button',
    disabled: false,
    inverse: false,
    variant: 'default',
  },
}
