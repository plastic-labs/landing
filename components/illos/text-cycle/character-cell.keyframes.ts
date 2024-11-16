import { keyframes } from 'styled-components'
import Keyframes from 'styled-components/dist/models/Keyframes'
import { Cycle, cycles } from './text-cycle.types'

const SEGMENT = 100 / (cycles.length + 2)
const MAJORS = Array(cycles.length)
  .fill(null)
  .map((_, index) => SEGMENT * (index + 2.5))
const MINORS = MAJORS.map(major => major - SEGMENT / 2)

export const cycleCharacter = cycles.reduce(
  (acc, cycle) => {
    return {
      ...acc,
      [cycle]: keyframes`
        0% {
          opacity: 1;
        }
        ${`${MAJORS[cycle - 1] - 0.00001}%`} {
          opacity: 1;
        }
        ${`${MAJORS[cycle - 1]}%`} {
          opacity: 0;
        }
      `,
    }
  },
  {} as Record<Cycle, Keyframes>,
)

export const cycleFlash = cycles.reduce(
  (acc, cycle) => {
    return {
      ...acc,
      [cycle]: keyframes`
        ${`${MINORS[cycle - 1] - 0.00001}%`} {
          opacity: 0;
        }
        ${`${MINORS[cycle - 1]}%`} {
          opacity: 1;
        }
        ${`${MAJORS[cycle - 1] - 0.00001}%`} {
          opacity: 1;
        }
        ${`${MAJORS[cycle - 1]}%`} {
          opacity: 0;
        }
      `,
    }
  },
  {} as Record<Cycle, Keyframes>,
)

export const cycleNumber = cycles.reduce(
  (acc, cycle) => {
    return {
      ...acc,
      [cycle]: keyframes`
        0% {
          opacity: 0;
        }
        ${`${MAJORS[cycle] - 0.00001}%`} {
          opacity: 0;
        }
        ${`${MAJORS[cycle]}%`} {
          opacity: 1;
        }
        ${`${MAJORS[cycle] + SEGMENT / 3}%`} {
          opacity: 1;
        }
        ${`${MAJORS[cycle] + SEGMENT / 3 + 0.00001}%`} {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      `,
    }
  },
  {} as Record<Cycle, Keyframes>,
)
