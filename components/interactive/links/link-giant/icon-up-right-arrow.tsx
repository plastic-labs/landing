import { SVGProps } from 'react'

export const IconUpRightArrow: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 41,
  height = 41,
  ...props
}) => {
  return (
    <svg
      {...props}
      fill="none"
      height={height}
      viewBox="0 0 41 41"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m8.6665 8.49998h8v-7.99998h-8zm8 0h8v-7.99998h-8zm16 0h-8v-7.99998h8zm0 0h8v-7.99998h-8zm0 8.00032h-8v-8.00003h8zm-16 7.9999h8v-8h-8zm0 7.9999h-8v-8h8zm-15.999996 7.9999h7.999986v-7.9999h-7.999986zm31.999996-15.9999v-7.9998-.0001-7.99993h8v7.99993.0001 7.9998.0001 7.9999 7.9999h-8v-7.9999-7.9999zm-24.00001-16.00012h-7.999986v-7.99998h7.999986z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}
