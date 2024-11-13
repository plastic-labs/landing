/* eslint-disable import/no-default-export */
import { StatesGrid } from '@/components/helpers/states-grid'
import { colors } from '@/styles/palette'
import { Text } from './typography'
import {
  typographyAlignments,
  typographyTags,
  TypographyVariant,
  typographyVariants,
} from './typography.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Core / Typography',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: {
        type: 'select',
      },
      description: 'The text alignment',
      options: typographyAlignments,
      table: {
        defaultValue: {
          summary: typographyAlignments[0],
        },
        type: {
          summary: `Any of: ${typographyAlignments.join(', ')}`,
        },
      },
    },
    as: {
      control: {
        type: 'select',
      },
      description:
        'The chosen tag with which to override the default tag for the variant',
      options: typographyTags,
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: `Any of: ${typographyTags.join(', ')}`,
        },
      },
    },
    children: {
      control: {
        type: 'text',
      },
      description: 'The text content',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'string | string[] | ReactNode',
        },
      },
    },
    color: {
      control: {
        type: 'select',
      },
      description: 'The text color',
      options: colors,
      table: {
        defaultValue: {
          summary: colors[0],
        },
        type: {
          summary: `Any of: ${colors.join(', ')}`,
        },
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      description: 'The text variant controlling scale and tag',
      options: typographyVariants,
      table: {
        defaultValue: {
          summary: 'body1',
        },
        type: {
          summary: `Any of: ${typographyVariants.join(', ')}`,
        },
      },
    },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  argTypes: {
    variant: {
      control: false,
    },
  },
  args: {
    align: 'left',
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'Body1',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        const { variant, ...rest } = args
        return (
          <Text
            {...rest}
            variant={row as TypographyVariant}
            style={{ justifySelf: 'start' }}
          />
        )
      }

      return (
        <StatesGrid
          columns={['Variants']}
          rows={typographyVariants}
          Story={story}
        />
      )
    },
  ],
}
