export const colorVarNames = ['--color-blue', '--color-pink'] as const
export type ColorVar = (typeof colorVarNames)[number]

export const colorValues: Record<ColorVar, string> = {
  '--color-blue': '#0E06E2',
  '--color-pink': '#FF5A7E',
}

export const colors = ['currentColor', ...colorVarNames] as const
export type Color = (typeof colors)[number]
