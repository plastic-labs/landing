/* eslint-disable import/no-default-export */
import { products } from './button-product.types'
import { ProductName as ProductNameUi } from './product-name'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Interactive / Button Product / Product Name',
  component: ProductNameUi,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: {
        type: 'select',
      },
      description: 'The destination product',
      options: products,
      table: {
        defaultValue: {
          summary: '[required]',
        },
        type: {
          summary: `Any of: ${products.join(', ')}`,
        },
      },
    },
  },
} satisfies Meta<typeof ProductNameUi>

export default meta
type Story = StoryObj<typeof meta>

export const ProductName: Story = {
  args: {
    product: 'bloom',
  },
}
