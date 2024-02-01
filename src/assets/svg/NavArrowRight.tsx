import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
  marginLeft?: number
}

const NavArrowRightIcon: React.FC<Props> = props => {
  const { color, width, height, marginLeft } = props

  return (
    <Svg
      width={width || 10}
      height={height || 18}
      viewBox="0 0 10 18"
      fill="none"
      style={{ marginLeft }}>
      <Path
        d="M1 .833l8 8-8 8"
        stroke={color || '#A56073'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NavArrowRightIcon
