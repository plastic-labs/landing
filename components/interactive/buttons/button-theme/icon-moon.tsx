import { SVGProps } from 'react'

export const IconMoon: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 21,
  height = 20,
  ...props
}) => {
  return (
    <svg
      {...props}
      fill="none"
      height={height}
      viewBox="0 0 21 20"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15.4998 1.66699.5149 1.02965c.2212.44249.3318.66373.4796.85545.1311.17012.2837.32263.4538.45377.1917.14778.4129.2584.8554.47964l1.0297.51483-1.0297.51482c-.4425.22124-.6637.33186-.8554.47965-.1701.13113-.3227.28364-.4538.45376-.1478.19172-.2584.41296-.4796.85545l-.5149 1.02965-.5148-1.02965c-.2212-.44249-.3319-.66373-.4796-.85545-.1312-.17012-.2837-.32263-.4538-.45376-.1917-.14779-.413-.25841-.8554-.47965l-1.0297-.51482 1.0297-.51483c.4424-.22124.6637-.33186.8554-.47964.1701-.13114.3226-.28365.4538-.45377.1477-.19172.2584-.41296.4796-.85545z" />
        <path d="m17.9998 11.1581c-1.0925 1.9164-3.1545 3.2085-5.5183 3.2085-3.50576 0-6.34771-2.842-6.34771-6.34767 0-2.36399 1.29229-4.42615 3.20896-5.5186-4.02642.38176-7.17625 3.77243-7.17625 7.89877 0 4.3821 3.55244 7.9346 7.9346 7.9346 4.1261 0 7.5167-3.1495 7.8987-7.1756z" />
      </g>
    </svg>
  )
}