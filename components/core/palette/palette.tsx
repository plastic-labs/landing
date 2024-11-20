import { ColorVar, NeutralVar } from '@/styles/palette'
import { Swatch } from '../../helpers/swatch'

/**
 * This component is for Storybook demonstration purposes only and
 * not expected to be used in the application/site proper.
 */
export const Palette: React.FC<{ color: ColorVar | NeutralVar }> = ({
  color,
}) => {
  return <Swatch color={color} name={color} />
}
