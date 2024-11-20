import { SVGProps } from 'react'
import { StyledSvg } from './icon-name.styles'

export const IconBloom: React.FC<SVGProps<SVGSVGElement>> = ({
  width = 236,
  height = 67,
  ...props
}) => {
  return (
    <StyledSvg
      {...props}
      fill="none"
      height={height}
      viewBox="0 0 236 67"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" transform="translate(1.1818 .5455)">
        <path
          d="m0 0h32.727282v8.181817h-24.54546v16.36363h24.54546v8.1818h-24.54546v24.5455h24.54546v8.1818h-32.727282zm32.727282 32.727247h8.1818v24.5455h-8.1818zm0-24.54543h8.1818v16.36363h-8.1818zm15.5774-8.181817h8.1818v57.272747h32.7273v8.1818h-40.9091zm48.3047 8.181817h8.1818v49.09093h-8.1818zm8.1818 49.09093h24.545v8.1818h-24.545zm24.545-49.09093h8.182v49.09093h-8.182zm-24.545-8.181817h24.545v8.181817h-24.545zm40.123 8.181817h8.182v49.09093h-8.182zm8.182 49.09093h24.545v8.1818h-24.545zm24.545-49.09093h8.182v49.09093h-8.182zm-24.545-8.181817h24.545v8.181817h-24.545zm40.123 0h8.181v16.363647h8.182v8.1818h-8.182v40.9091h-8.181zm32.727 24.545447h-8.182v-8.1818h8.182v-16.363647h8.182v65.454547h-8.182zm-16.364 0h8.182v16.3636h-8.182z"
          fill="currentColor"
        />
        <path
          d="m129.836182-.5-.000182 8.181 8.182182.000817v50.09093l-8.182182-.000747.000182 8.182547h-25.545l-.000182-8.182547-8.181618.000747v-50.09093l8.181618-.000817.000182-8.181zm72.064 0-.000182 16.363 8.182182.000647-.000182 8.181353h7.182l.000182-8.181353 8.181818-.000647.000182-16.363h9.182v66.454547h-9.182l-.000182-40.909547h-7.182l.000182 16.364047h-9.182l-.000182-16.364047h-7.182l.000182 40.909547h-9.181v-66.454547zm-168.6729 0-.000282 8.181 8.182082.000817v17.36363l-8.182082-.000447v7.182l8.182082.000247v25.5455l-8.182082-.000747.000282 8.182547h-33.727282v-66.454547h.5zm23.7592 0-.000482 57.272 32.727782.000747v9.1818h-41.9091v-66.454547zm121.1547 0-.000182 8.181 8.182182.000817v50.09093l-8.182182-.000747.000182 8.182547h-25.545l-.000182-8.182547-8.181818.000747v-50.09093l8.181818-.000817.000182-8.181zm39.623 25.045447h-8.182v16.3636h8.182zm-16.364-24.545447h-8.181v65.454547h8.181v-40.9091h8.182v-8.1818h-8.182zm-23.759 57.272747h-24.545v8.1818h24.545zm-48.305 0h-24.545v8.1818h24.545zm-72.8497-57.272747h-8.1818v65.454547h40.9091v-8.1818h-32.7273zm-23.7592 0h-32.727282v65.454547h32.727282v-8.1818h-24.54546v-24.5455h24.54546v-8.1818h-24.54546v-16.36363h24.54546zm153.0959 8.181817h-8.182v49.09093h8.182zm-32.727 0h-8.182v49.09093h8.182zm-15.578 0h-8.182v49.09093h8.182zm-32.727 0h-8.1818v49.09093h8.1818zm-63.8821 24.54543h-8.1818v24.5455h8.1818zm-8.682082.499753h-23.546v23.545h23.546zm96.609-24.546h-23.545v48.091h23.545zm48.305 0h-23.545v48.091h23.545zm-136.231918-.499183h-8.1818v16.36363h8.1818zm-8.682082.499183h-23.546v15.364h23.546zm97.109182-8.681h-24.545v8.181817h24.545zm48.305 0h-24.545v8.181817h24.545zm40.123 24.545447h8.182v40.9091h8.182v-65.454547h-8.182v16.363647h-8.182z"
          fill="var(--surface-contrast-base, var(--interactive-product-surface-contrast))"
        />
      </g>
    </StyledSvg>
  )
}
