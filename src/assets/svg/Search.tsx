import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface SearchIconProps {
  color?: string
  width?: number
  height?: number
}

const SearchIcon: React.FC<SearchIconProps> = props => {
  const { color, width, height } = props

  return (
    <Svg
      width={width || 19}
      height={height || 19}
      viewBox="0 0 19 19"
      fill="none">
      <Path
        d="M13.143 13.143l4.047 4.047M1 7.939a6.939 6.939 0 1013.877 0A6.939 6.939 0 001 7.939z"
        stroke={color || '#A56073'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchIcon
