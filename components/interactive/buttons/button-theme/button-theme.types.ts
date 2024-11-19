import { ButtonHTMLAttributes } from 'react'
import { SharedSimpleButtonProps } from '../shared/button.types'

export interface ButtonThemeProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SharedSimpleButtonProps {
  onClick: VoidFunction | React.MouseEventHandler<HTMLButtonElement>
}
