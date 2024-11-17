export const buttonStyleVariants = ['default', 'navigation'] as const
export type ButtonStyleVariant = (typeof buttonStyleVariants)[number]

export interface SharedStylesButtonProps {
  $variant: ButtonStyleVariant
}

export interface SharedButtonProps {
  variant?: ButtonStyleVariant
}
