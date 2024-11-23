/* eslint-disable import/no-default-export */
import { HeroStatement as HeroStatementUi } from './hero-statement'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Composed / Hero Statement',
  component: HeroStatementUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroStatementUi>

export default meta
type Story = StoryObj<typeof meta>

export const HeroStatement: Story = {}
