/* eslint-disable import/no-default-export */
import { Footer as FooterUi } from './footer'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout / Footer',
  component: FooterUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FooterUi>

export default meta
type Story = StoryObj<typeof meta>

export const Footer: Story = {}
