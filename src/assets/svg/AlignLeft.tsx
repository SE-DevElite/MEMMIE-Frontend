import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
}

const AlignLeftIcon: React.FC<Props> = props => {
  const { color, width, height } = props

  return (
    <Svg
      width={width || 11}
      height={height || 8}
      viewBox="0 0 11 8"
      fill="none">
      <Path
        d="M.54 3.331h7.687M.54 1.135h9.883M.54 7.723h7.687M.54 5.527h9.883"
        stroke={color || '#fff'}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default AlignLeftIcon
