import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  color?: string
  width?: number
  height?: number
}

const NavArrowDownIcon: React.FC<Props> = props => {
  const { color, width, height } = props

  return (
    <Svg width={width || 9} height={height || 6} viewBox="0 0 9 6" fill="none">
      <Path
        d="M1 1.25l3.5 3.5L8 1.25"
        stroke={color || '#A56073'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NavArrowDownIcon
