import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  width?: number
  height?: number
  color?: string
}

const CheckIcon: React.FC<Props> = props => {
  const { width, height, color } = props

  return (
    <Svg width={9 || width} height={7 || height} viewBox="0 0 9 7" fill="none">
      <Path
        d="M.857 3.333L2.84 5.315a1 1 0 001.47-.062L7.93.976"
        stroke={'#fff' || color}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default CheckIcon
