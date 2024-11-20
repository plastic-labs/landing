export const buttonStates = ['default', 'hover', 'pressed', 'disabled'] as const
export type ButtonState = (typeof buttonStates)[number]
