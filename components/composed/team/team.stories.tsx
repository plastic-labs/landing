/* eslint-disable import/no-default-export */
import { Team as TeamUi } from './team'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Composed / Team',
  component: TeamUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TeamUi>

export default meta
type Story = StoryObj<typeof meta>

export const Team: Story = {}
