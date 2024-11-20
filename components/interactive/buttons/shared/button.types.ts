export const buttonStyleVariants = ['default', 'navigation'] as const
export type ButtonStyleVariant = (typeof buttonStyleVariants)[number]

export interface SharedStylesButtonProps {
  $inverse?: boolean
  $variant: ButtonStyleVariant
}

export interface SharedButtonProps {
  inverse?: boolean
  variant?: ButtonStyleVariant
}

export interface SharedSimpleButtonStylesProps {
  $inverse?: boolean
}

export interface SharedSimpleButtonProps {
  inverse?: boolean
}
