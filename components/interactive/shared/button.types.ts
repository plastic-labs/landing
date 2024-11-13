export const buttonStyleVariants = ['primary', 'secondary'] as const
export type ButtonStyleVariant = (typeof buttonStyleVariants)[number]

export const buttonSizeVariants = ['medium', 'small'] as const
export type ButtonSizeVariant = (typeof buttonSizeVariants)[number]

export interface SharedStylesButtonProps {
  $size: ButtonSizeVariant
  $variant: ButtonStyleVariant
}

export interface SharedButtonProps {
  size?: ButtonSizeVariant
  variant?: ButtonStyleVariant
}
