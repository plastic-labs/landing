/* eslint-disable import/no-default-export */
import { ButtonLink } from '@/components/interactive/buttons/button-link'
import { PricingCard as PricingCardUi } from './pricing-card'
import { periods } from './pricing-card.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Cards / Pricing Card',
  component: PricingCardUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ctas: {
      control: {
        type: 'text',
      },
      description: 'One or more CTAs',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'ReactNode',
        },
      },
    },
    description: {
      control: {
        type: 'text',
      },
      description: 'Optional text content',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        type: {
          summary: 'string',
        },
      },
    },
    details: {
      control: {
        type: 'text',
      },
      description: 'Detailed bullets',
      table: {
        defaultValue: {
          summary: '[]',
        },
        type: {
          summary: 'string[]',
        },
      },
    },
    isFeatured: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the plan is the featured one',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    name: {
      control: {
        type: 'text',
      },
      description: 'The name',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'string',
        },
      },
    },
    period: {
      control: {
        type: 'select',
      },
      description: 'The period the applies to the price',
      options: periods,
      table: {
        defaultValue: {
          summary: periods[0],
        },
        type: {
          summary: `Period: any of: ${periods.join(', ')}.`,
        },
      },
    },
    price: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
        step: 10,
      },
      description:
        'The price of the plan; use zero for “Free”; values below zero are not allowed',
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: 'number',
        },
      },
    },
  },
} satisfies Meta<typeof PricingCardUi>

export default meta
type Story = StoryObj<typeof meta>

export const PricingCard: Story = {
  args: {
    ctas: (
      <ButtonLink href="https://plasticlabs.ai/" variant="secondary">
        Action
      </ButtonLink>
    ),
    description: '',
    details: [
      'Lorem adipiscing',
      'Sollicitudin',
      'Lorem ipsum tincidunt',
      'Lorem ipsum posuere',
      'Lorem ipsum vulputate',
    ],
    isFeatured: false,
    name: 'Standard',
    period: 'month',
    price: 100,
  },
}
