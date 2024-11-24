export const neutralVarNames = [
  '--neutral-black',
  '--neutral-dark-grey',
  '--neutral-grey',
  '--neutral-white',
] as const
export type NeutralVar = (typeof neutralVarNames)[number]

export const neutralValues: Record<NeutralVar, string> = {
  '--neutral-black': '#000000',
  '--neutral-dark-grey': '#4A4A4A',
  '--neutral-grey': '#888888',
  '--neutral-white': '#FFFFFF',
}

export const isNeutralVar = (
  color: ColorVar | GradientVar | NeutralVar,
): color is NeutralVar => neutralVarNames.includes(color as NeutralVar)

export const colorVarNames = [
  '--color-black',
  '--color-dusty-white',
  '--color-green',
] as const
export type ColorVar = (typeof colorVarNames)[number]

export const colorValues: Record<ColorVar, string> = {
  '--color-black': '#191919',
  '--color-dusty-white': '#E2E2E2',
  '--color-green': '#C0FFE1',
}

export const isColorVar = (
  color: ColorVar | GradientVar | NeutralVar,
): color is ColorVar => colorVarNames.includes(color as ColorVar)

export const colors = [
  'currentColor',
  ...neutralVarNames,
  ...colorVarNames,
] as const
export type Color = (typeof colors)[number]

export const gradientVarNames = [] as const
export type GradientVar = (typeof gradientVarNames)[number]

export const gradientValues: Record<GradientVar, string> = {}

export const isGradientVar = (
  color: ColorVar | GradientVar | NeutralVar,
): color is GradientVar => gradientVarNames.includes(color as GradientVar)
