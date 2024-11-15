import { keyframes } from 'styled-components'
import Keyframes from 'styled-components/dist/models/Keyframes'
import { Cycle } from './text-cycle.types'

export const cycleCharacter: Record<Cycle, Keyframes> = {
  1: keyframes`
      0% {
        opacity: 1;
      }
      39.99999% {
        opacity: 1;
      }
      40% {
        opacity: 0;
      }
    `,
  2: keyframes`
      0% {
        opacity: 1;
      }
      59.99999% {
        opacity: 1;
      }
      60% {
        opacity: 0;
      }
    `,
  3: keyframes`
      0% {
        opacity: 1;
      }
      79.99999% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
    `,
}

export const cycleFlash: Record<Cycle, Keyframes> = {
  1: keyframes`
      29.99999% {
        opacity: 0;
      }
      30% {
        opacity: 1;
      }
      39.99999% {
        opacity: 1;
      }
      40% {
        opacity: 0;
      }
    `,
  2: keyframes`
      49.99999% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      59.99999% {
        opacity: 1;
      }
      60% {
        opacity: 0;
      }
    `,
  3: keyframes`
      69.99999% {
        opacity: 0;
      }
      70% {
        opacity: 1;
      }
      79.99999% {
        opacity: 1;
      }
      80% {
        opacity: 0;
      }
    `,
}
