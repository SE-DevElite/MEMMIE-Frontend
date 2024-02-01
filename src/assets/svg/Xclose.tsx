import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
}

const XcloseIcon: React.FC<Props> = props => {
  const { color, width, height } = props

  return (
    <Svg width={width || 7} height={height || 7} viewBox="0 0 7 7" fill="none">
      <Path
        d="M1.324 6.19l2.433-2.433m0 0l2.432-2.433M3.757 3.757L1.324 1.324m2.433 2.433l2.432 2.432"
        stroke={color || '#fff'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default XcloseIcon
