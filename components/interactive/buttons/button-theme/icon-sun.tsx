import { SVGProps } from 'react'

export const IconSun: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 25,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      fill="none"
      height={height}
      viewBox="0 0 25 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12.5 2v2m0 16v2m-8-10h-2m4.31412-5.68588-1.41422-1.41422m12.786 1.41422 1.4142-1.41422m-12.78598 12.7901-1.41422 1.4142m12.786-1.4142 1.4142 1.4142m2.8999-7.1042h-2m-3 0c0 2.7614-2.2386 5-5 5-2.76142 0-5-2.2386-5-5 0-2.76142 2.23858-5 5-5 2.7614 0 5 2.23858 5 5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
