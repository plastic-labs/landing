export const buttonStates = ['default', 'hover', 'pressed', 'disabled'] as const
export type ButtonState = (typeof buttonStates)[number]

export const linkStates = ['default', 'hover', 'disabled'] as const
export type LinkState = (typeof linkStates)[number]
