/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { LinkPartner as LinkPartnerUi } from './link-partner'
import { partnerNames } from './link-partner.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Links / Link Partner',
  component: LinkPartnerUi,
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
          summary: '[required]',
        },
        type: {
          summary: 'string Url',
        },
      },
    },
    partnerName: {
      control: {
        type: 'select',
      },
      description: 'The partner name',
      options: partnerNames,
      table: {
        defaultValue: {
          summary: 'PartnerName',
        },
        type: {
          summary: `Any of: ${partnerNames.join(', ')}`,
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
} satisfies Meta<typeof LinkPartnerUi>

export default meta
type Story = StoryObj<typeof meta>

const validStates = [...buttonStates]
validStates.pop()

export const States: Story = {
  args: {
    href: 'https://www.betaworks.com/',
    partnerName: 'betaworks',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              minWidth: '300px',
            }}
          >
            <LinkPartnerUi {...args} data-state={row as ButtonState} />
          </div>
        )
      }

      return (
        <StatesGrid columns={['States']} rows={validStates} Story={story} />
      )
    },
  ],
}

export const LinkPartner: Story = {
  args: {
    href: 'https://www.betaworks.com/',
    partnerName: 'betaworks',
  },
}
