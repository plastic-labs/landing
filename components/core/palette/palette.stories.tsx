/* eslint-disable import/no-default-export */
import { StatesGrid } from '@/components/helpers/states-grid'
import {
  ColorVar,
  colorVarNames,
  GradientVar,
  gradientVarNames,
  NeutralVar,
  neutralVarNames,
} from '@/styles/palette'
import { Palette } from './palette'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Core / Palette',
  component: Palette,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: false,
    },
  },
} satisfies Meta<typeof Palette>

export default meta
type Story = StoryObj<typeof meta>

export const Neutrals: Story = {
  args: {
    color: '--neutral-black',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        const { color, ...rest } = args
        return <Palette {...rest} color={row as NeutralVar} />
      }

      return (
        <StatesGrid
          columns={['Neutrals']}
          rows={neutralVarNames}
          Story={story}
        />
      )
    },
  ],
}

export const Colors: Story = {
  args: {
    color: '--color-black',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        const { color, ...rest } = args
        return <Palette {...rest} color={row as ColorVar} />
      }

      return (
        <StatesGrid columns={['Colors']} rows={colorVarNames} Story={story} />
      )
    },
  ],
}

export const Gradients: Story = {
  args: {
    color: '--color-black',
  },
  decorators: [
    (_, { args }) => {
      const story: React.FC<{ column: string; row: string }> = ({ row }) => {
        const { color, ...rest } = args
        return <Palette {...rest} color={row as GradientVar} />
      }

      return (
        <StatesGrid
          columns={['Gradients']}
          rows={gradientVarNames}
          Story={story}
        />
      )
    },
  ],
}
