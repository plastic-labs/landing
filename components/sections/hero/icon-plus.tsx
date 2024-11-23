import { SVGProps } from 'react'

export const IconPlus: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 9,
  height = 10,
  ...props
}) => {
  return (
    <svg
      {...props}
      fill="none"
      height={height}
      viewBox="0 0 9 10"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.726 9.198V5.112H0V4.104H3.726V0H4.752V4.104H8.496V5.112H4.752V9.198H3.726Z"
        fill="currentColor"
      />
    </svg>
  )
}
