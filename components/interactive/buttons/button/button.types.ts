import { ButtonHTMLAttributes } from 'react'
import { SharedButtonProps } from '../shared/button.types'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SharedButtonProps {
  children: React.ReactNode
  onClick: VoidFunction | React.MouseEventHandler<HTMLButtonElement>
}
