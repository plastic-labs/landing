import { ButtonHTMLAttributes } from 'react'

export interface ButtonThemeProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: VoidFunction | React.MouseEventHandler<HTMLButtonElement>
}
