/* eslint-disable import/no-default-export */
import { AboutUs as AboutUsUi } from './about-us'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Composed / About Us',
  component: AboutUsUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutUsUi>

export default meta
type Story = StoryObj<typeof meta>

export const AboutUs: Story = {}
