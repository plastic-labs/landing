import { SVGProps } from 'react'

export const IconTwitter: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 28,
  height = 28,
  ...props
}) => {
  return (
    <svg
      {...props}
      fill="none"
      height={height}
      viewBox="0 0 28 28"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <clipPath id="a">
        <path d="m4 4h20v20h-20z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path
          d="m15.9027 12.4686 7.4455-8.4686h-1.7644l-6.4648 7.3532-5.1635-7.3532h-5.9555l7.8082 11.1193-7.8082 8.8807h1.7645l6.8272-7.7652 5.453 7.7652h5.9555l-8.0977-11.5314h.0005zm-2.4167 2.7487-.7912-1.1071-6.29463-8.81059h2.71l5.08003 7.11029.7911 1.1071 6.6034 9.2423h-2.71l-5.3885-7.5418v-.0005z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
