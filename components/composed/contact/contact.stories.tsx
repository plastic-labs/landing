/* eslint-disable import/no-default-export */
import { Contact as ContactUi } from './contact'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Composed / Contact',
  component: ContactUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactUi>

export default meta
type Story = StoryObj<typeof meta>

export const Contact: Story = {}
