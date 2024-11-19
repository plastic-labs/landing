/* eslint-disable import/no-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import { fn } from '@storybook/test'
import { MouseEvent } from 'react'
import {
  ButtonState,
  buttonStates,
  StatesGrid,
} from '@/components/helpers/states-grid'
import { LinkTeamMember as LinkTeamMemberUi } from './link-team-member'
import { teamMemberNames } from './link-team-member.types'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Links / Link Team Member',
  component: LinkTeamMemberUi,
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
    teamMember: {
      control: {
        type: 'select',
      },
      description: 'The team member name',
      options: teamMemberNames,
      table: {
        defaultValue: {
          summary: 'TeamMember',
        },
        type: {
          summary: `Any of: ${teamMemberNames.join(', ')}`,
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
} satisfies Meta<typeof LinkTeamMemberUi>

export default meta
type Story = StoryObj<typeof meta>

const validStates = [...buttonStates]
validStates.pop()

export const States: Story = {
  args: {
    href: 'https://x.com/courtlandleer',
    teamMember: 'leer-courtland',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        return <LinkTeamMemberUi {...args} data-state={row as ButtonState} />
      }

      return (
        <StatesGrid columns={['States']} rows={validStates} Story={story} />
      )
    },
  ],
}

export const LinkTeamMember: Story = {
  args: {
    href: 'https://x.com/courtlandleer',
    teamMember: 'leer-courtland',
  },
}
