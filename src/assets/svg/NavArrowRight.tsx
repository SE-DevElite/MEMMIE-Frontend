import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
}

const NavArrowRightIcon: React.FC<Props> = props => {
  const { color, width, height } = props

  return (
    <Svg
      width={width || 10}
      height={height || 18}
      viewBox="0 0 10 18"
      fill="none">
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
