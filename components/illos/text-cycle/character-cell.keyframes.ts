import { keyframes } from 'styled-components'
import Keyframes from 'styled-components/dist/models/Keyframes'
import { Cycle, cycles } from './text-cycle.types'

const SEGMENT = 100 / (cycles.length + 2)
const MAJORS = Array(cycles.length)
  .fill(null)
  .map((_, index) => SEGMENT * (index + 2))
const MINORS = MAJORS.map(major => major - SEGMENT / 2)

export const cycleCharacter: Record<Cycle, Keyframes> = {
  1: keyframes`
      0% {
        opacity: 1;
      }
      ${`${MAJORS[0] - 0.00001}%`} {
        opacity: 1;
      }
      ${`${MAJORS[0]}%`} {
        opacity: 0;
      }
    `,
  2: keyframes`
      0% {
        opacity: 1;
      }
      ${`${MAJORS[1] - 0.00001}%`} {
        opacity: 1;
      }
      ${`${MAJORS[1]}%`} {
        opacity: 0;
      }
    `,
  3: keyframes`
      0% {
        opacity: 1;
      }
      ${`${MAJORS[2] - 0.00001}%`} {
        opacity: 1;
      }
      ${`${MAJORS[2]}%`} {
        opacity: 0;
      }
    `,
  4: keyframes`
      0% {
        opacity: 1;
      }
      ${`${MAJORS[3] - 0.00001}%`} {
        opacity: 1;
      }
      ${`${MAJORS[3]}%`} {
        opacity: 0;
      }
    `,
}

export const cycleFlash: Record<Cycle, Keyframes> = {
  1: keyframes`
      ${`${MINORS[0] - 0.00001}%`} {
        opacity: 0;
      }
      ${`${MINORS[0]}%`} {
        opacity: 1;
      }
      ${`${MAJORS[0] - 0.00001}%`} {
        opacity: 1;
      }
      ${`${MAJORS[0]}%`} {
        opacity: 0;
      }
    `,
  2: keyframes`
      ${`${MINORS[1] - 0.00001}%`} {
        opacity: 0;
      }
      ${`${MINORS[1]}%`} {
        opacity: 1;
      }
      ${`${MAJORS[1] - 0.00001}%`} {
        opacity: 1;
      }
      ${`${MAJORS[1]}%`} {
        opacity: 0;
      }
    `,
  3: keyframes`
      ${`${MINORS[2] - 0.00001}%`} {
        opacity: 0;
      }
      ${`${MINORS[2]}%`} {
        opacity: 1;
      }
      ${`${MAJORS[2] - 0.00001}%`} {
        opacity: 1;
      }
      ${`${MAJORS[2]}%`} {
        opacity: 0;
      }
    `,
  4: keyframes`
      ${`${MINORS[3] - 0.00001}%`} {
        opacity: 0;
      }
      ${`${MINORS[3]}%`} {
        opacity: 1;
      }
      ${`${MAJORS[3] - 0.00001}%`} {
        opacity: 1;
      }
      ${`${MAJORS[3]}%`} {
        opacity: 0;
      }
    `,
}
