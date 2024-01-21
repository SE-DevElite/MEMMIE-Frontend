import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
}

const GarbageIcon: React.FC<Props> = props => {
  const { color, width, height } = props

  return (
    <Svg
      width={width || 27}
      height={height || 24}
      viewBox="0 0 27 24"
      fill="none">
      <Path
        d="M1 3.848h24.889M20.445 22.514l3.29-18.666M3.333 3.848l3.292 18.666M7.222 22.514h13.222M10.333 1.514h6.223M16.556 1.514v2.334M10.333 1.514v2.334"
        stroke={color || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default GarbageIcon
