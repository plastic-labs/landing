/* eslint-disable import/no-default-export */
import { Products as ProductsUi } from './products'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Composed / Products',
  component: ProductsUi,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductsUi>

export default meta
type Story = StoryObj<typeof meta>

export const Products: Story = {
  decorators: [
    Story => (
      <div style={{ background: 'var(--color-primary-surface-contrast)' }}>
        <Story />
      </div>
    ),
  ],
}
